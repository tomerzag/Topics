using System.ComponentModel.DataAnnotations;

namespace Test.Dtos.Requests
{
    public class SearchRelatedTopicsData
    {
        [Required]
        [MinLength(1)]
        public string Query { get; set; }
    }
}
