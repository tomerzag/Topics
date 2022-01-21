using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Test.Models.Entities;
using Test.Models.Interfaces;

namespace Test.Clients
{
    public class DuckDuckGo : ITopicsClient
    {
        private const string CLIENT_NAME = "DuckDuckGo";
        private readonly IHttpClientFactory _httpClientFactory;

        public DuckDuckGo(IHttpClientFactory httpClientFactory)
        {
            this._httpClientFactory = httpClientFactory;
        }

        public async Task<Topic> SearchTopic(string query, string format)
        {
            var httpClient = _httpClientFactory.CreateClient(CLIENT_NAME);
            var httpResponseMessage = await httpClient.GetAsync(
                $"?q={query}&format={format}");

            if (httpResponseMessage.IsSuccessStatusCode)
            {
                using var contentStream =
                    await httpResponseMessage.Content.ReadAsStreamAsync();

                return await JsonSerializer.DeserializeAsync
                    <Topic>(contentStream);
            }

            return null;
        }
    }
}
