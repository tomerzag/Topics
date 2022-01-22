using System.Collections.Generic;
using System.Threading.Tasks;
using Test.Models.Entities;

namespace Test.Models.Interfaces
{
    public interface ITopicsProvider
    {
        Task<List<Topic>> SearchRelatedTopicAsync(string query);
    }
}
