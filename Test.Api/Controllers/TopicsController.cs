using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Test.Dtos.Requests;
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
                return Ok(await _topicsService.SearchRelatedTopicsAsync(data.Query));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
