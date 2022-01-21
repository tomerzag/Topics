using System.Collections.Generic;
using System.Threading.Tasks;
using Test.Models.Entities;

namespace Test.Models.Interfaces
{
    public interface ITopicsClient
    {
        Task<Topic> GetTopic(string query, string format);
    }
}
