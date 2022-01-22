using System.Collections.Generic;

namespace DuckDuckGo.Models
{
    public class RelatedTopic
    {
        public string FirstURL { get; set; }

        public List<RelatedTopic> Topics { get; set; }
    }
}
