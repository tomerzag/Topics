using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Dtos.Requests;
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
        private readonly IMapper _mapper;

        public TopicsController(ITopicsService topicsService,
            IMapper mapper)
        {
            this._topicsService = topicsService;
            this._mapper = mapper;
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search([FromQuery] SearchRelatedTopicsData data)
        {
            try
            {
                var relatedTopics = (await _topicsService.SearchRelatedTopics(data.Query))
                    .SelectMany(rt => !string.IsNullOrEmpty(rt.FirstURL) ?
                        new List<RelatedTopic>() { rt }
                        : rt.Topics);

                var dto = _mapper.Map<List<RelatedTopicDto>>(relatedTopics);
                return Ok(dto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
