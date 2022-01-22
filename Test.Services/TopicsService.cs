using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Models.Entities;
using Test.Models.Interfaces;

namespace Test.Services
{
    public class TopicsService : ITopicsService
    {
        private readonly ITopicsProvider _topicsClient;
        private readonly ILogger<TopicsService> _logger;

        public TopicsService(ITopicsProvider topicsClient,
            ILogger<TopicsService> logger)
        {
            this._topicsClient = topicsClient;
            this._logger = logger;
        }

        public async Task<List<Topic>> SearchRelatedTopicsAsync(string query)
        {
            try
            {
                return await _topicsClient.SearchRelatedTopicAsync(query);
            }
            catch (Exception ex)
            {
                _logger.LogError(exception: ex, message: "Search Related Topics");
                throw;
            }
        }
    }
}
