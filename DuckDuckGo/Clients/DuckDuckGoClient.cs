using System;
using System.Net.Http;

namespace DuckDuckGo.Clients
{
   public partial class DuckDuckGoClient : IDisposable
    {
        private const string CLIENT_NAME = "DuckDuckGo";
        public HttpClient HttpClient { get; set; }

        private bool _disposedValue;

        public DuckDuckGoClient(IHttpClientFactory httpClientFactory)
        {
            this.HttpClient = httpClientFactory.CreateClient(CLIENT_NAME);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposedValue)
            {
                if (disposing)
                {
                    this.HttpClient.Dispose();
                }

                _disposedValue = true;
            }
        }

        ~DuckDuckGoClient()
        {
            Dispose(false);
        }
    }
}
