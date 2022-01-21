using System.ComponentModel.DataAnnotations;

namespace Test.Api.Data
{
    public class SearchRelatedTopicsData
    {
        [Required]
        [MinLength(1)]
        public string Query { get; set; }
    }
}
