using AutoMapper;

namespace Test.Api.Profiles
{
    public class TopicsProfile : Profile
    {
        public TopicsProfile()
        {
            CreateMap<DuckDuckGo.Models.RelatedTopic, Test.Models.Entities.Topic>()
                .ForMember(dest =>
                    dest.Title,
                    opt => opt.MapFrom(src => src.FirstURL.Substring(src.FirstURL.LastIndexOf("/") + 1)))
                .ForMember(dest =>
                    dest.URL,
                    opt => opt.MapFrom(src => src.FirstURL));
        }
    }
}
