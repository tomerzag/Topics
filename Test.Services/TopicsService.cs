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
        private const string FORMAT = "json";

        private readonly ITopicsClient _topicsClient;
        private readonly ILogger<TopicsService> _logger;

        public TopicsService(ITopicsClient topicsClient,
            ILogger<TopicsService> logger)
        {
            this._topicsClient = topicsClient;
            this._logger = logger;
        }

        public async Task<List<RelatedTopic>> SearchRelatedTopics(string query)
        {
            try
            {
                var topic = await _topicsClient.SearchTopic(query, FORMAT);
                if (topic == null)
                    throw new ArgumentException($"Something is wrong with the query: {query}");

                return topic.RelatedTopics;
            }
            catch (Exception ex)
            {
                _logger.LogError(exception: ex, message: "Search Related Topics");
                throw;
            }
        }
    }
}
