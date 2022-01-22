using AutoMapper;
using DuckDuckGo.Clients;
using DuckDuckGo.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Test.Models.Extensions;
using Test.Models.Interfaces;

namespace DuckDuckGo
{
    public class TopicsProvider : ITopicsProvider
    {
        private const string FORMAT = "json";
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IMapper _mapper;

        public TopicsProvider(IHttpClientFactory httpClientFactory,
            IMapper mapper)
        {
            this._httpClientFactory = httpClientFactory;
            this._mapper = mapper;
        }

        public async Task<List<Test.Models.Entities.Topic>> SearchRelatedTopicAsync(string query)
        {
            using (DuckDuckGoClient client = new DuckDuckGoClient(_httpClientFactory))
            {
                var relatedTopics = (await client.SearchTopicAsync(query, FORMAT))
                    .GetHttpResponseAsync<Topic>()
                        .GetAwaiter()
                        .GetResult()
                    .RelatedTopics
                    .SelectMany(rt => !string.IsNullOrEmpty(rt.FirstURL) ?
                        new List<RelatedTopic>() { rt }
                        : rt.Topics
                            .Where(t => !string.IsNullOrEmpty(t.FirstURL)));

                return _mapper.Map<List<Test.Models.Entities.Topic>>(relatedTopics);
            }
        }
    }
}
