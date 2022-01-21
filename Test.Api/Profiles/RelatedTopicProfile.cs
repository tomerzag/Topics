using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Models.Dtos;
using Test.Models.Entities;

namespace Test.Api.Profiles
{
    public class RelatedTopicProfile : Profile
    {
        public RelatedTopicProfile()
        {
            CreateMap<RelatedTopic, RelatedTopicDto>()
                .ForMember(dest =>
                    dest.Title,
                    opt => opt.MapFrom(src => src.FirstURL.Substring(src.FirstURL.LastIndexOf("/"))))
                .ForMember(dest =>
                    dest.URL,
                    opt => opt.MapFrom(src => src.FirstURL));
        }
    }
}
