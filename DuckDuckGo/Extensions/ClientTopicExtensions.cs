using DuckDuckGo.Clients;
using System.Net.Http;
using System.Threading.Tasks;

namespace DuckDuckGo.Extensions
{
    public static class ClientTopicExtensions
    {
        public static async Task<HttpResponseMessage> SearchTopicAsync(this DuckDuckGoClient client,
                                                                       string query,
                                                                       string format)
        {
            return await client.HttpClient.GetAsync(
                $"?q={query}&format={format}");
        }
    }
}
