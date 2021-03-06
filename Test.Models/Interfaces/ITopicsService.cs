using System.Collections.Generic;
using System.Threading.Tasks;
using Test.Models.Entities;

namespace Test.Models.Interfaces
{
    public interface ITopicsService
    {
        Task<List<Topic>> SearchRelatedTopicsAsync(string query);
    }
}
