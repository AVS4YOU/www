using System;
using System.Web;

namespace avs4youAPI.Interfaces
{
    interface IFileManager
    {
        string SaveFile(HttpPostedFile file);

        byte[] GetFile(string fileName);
    }
}
