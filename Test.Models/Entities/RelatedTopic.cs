using System.Collections.Generic;

namespace Test.Models.Entities
{
    public class RelatedTopic
    {
        public string FirstURL { get; set; }

        public List<RelatedTopic> Topics { get; set; }
    }
}
