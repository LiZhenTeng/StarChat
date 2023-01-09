namespace WebApp.Hubs
{
    public interface IChatHub
    {
        Task ReceivedMessage(string username, string message);
        Task ReceivedPrivateMessage(string message);
        Task ReceivedMessageToCaller(string message);
        Task ReceivedMessageToGroup(string user,string message);
    }
}