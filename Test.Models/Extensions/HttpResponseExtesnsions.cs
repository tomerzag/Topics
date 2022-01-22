using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Test.Models.Extensions
{
    public static class HttpResponseExtesnsions
    {
        public static async Task<T> GetHttpResponseAsync<T>(this HttpResponseMessage httpResponseMessage) where T : class
        {
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                using var contentStream =
                    await httpResponseMessage.Content.ReadAsStreamAsync();

                return await JsonSerializer.DeserializeAsync
                    <T>(contentStream);
            }
            else
            {
                throw new System.Exception(httpResponseMessage.ReasonPhrase);
            }
        }
    }
}
