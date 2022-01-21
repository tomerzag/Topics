using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Api.Data;
using Test.Models.Dtos;
using Test.Models.Entities;
using Test.Models.Interfaces;

namespace Test.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TopicsController : ControllerBase
    {
        private readonly ITopicsService _topicsService;

        public TopicsController(ITopicsService topicsService)
        {
            this._topicsService = topicsService;
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search([FromQuery] SearchRelatedTopicsData data)
        {
            try
            {
                var relatedTopic = await _topicsService.SearchRelatedTopics(data.Query);

                var dto = relatedTopic.SelectMany(rt =>
                {
                    if (!string.IsNullOrEmpty(rt.FirstURL))
                        return new List<RelatedTopic>() { rt };
                    else
                        return rt.Topics;
                })
                    .Select(t => new RelatedTopicDto
                    {
                        URL = t.FirstURL,
                        Title = t.FirstURL.Split("/")[^1]
                    });

                return Ok(dto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
