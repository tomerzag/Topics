using System.Net.Http;
using System.Threading.Tasks;

namespace DuckDuckGo.Clients
{
    public partial class DuckDuckGoClient
    {
        public async Task<HttpResponseMessage> SearchTopicAsync(string query,
                                                                       string format)
        {
            return await this.HttpClient.GetAsync(
                $"?q={query}&format={format}");
        }
    }
}
