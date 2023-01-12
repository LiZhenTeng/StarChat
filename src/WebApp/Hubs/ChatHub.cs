using Microsoft.AspNetCore.SignalR;

namespace WebApp.Hubs
{
    public class ChatHub : Hub<IChatHub>
    {

        public override Task OnConnectedAsync()
        {
            Console.Write($"登陆了{Context.ConnectionId}");
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception? exception)
        {

            return base.OnDisconnectedAsync(exception);
        }
        /// <summary>
        /// 发送所有客户端
        /// </summary>
        /// <param name="username">发送人</param>
        /// <param name="message">消息</param>
        /// <returns></returns>
        public async Task SendMessage(string username, string message)
        {
            await Clients.All.ReceivedMessage(username, message);
        }

        /// <summary>
        /// 将消息发送回调用方
        /// </summary>
        /// <param name="message">消息</param>
        /// <returns></returns>
        public async Task SendMessageToCaller(string message)
        {
            await Clients.Caller.ReceivedMessageToCaller(message);
        }

        #region 用户
        /// <summary>
        /// 发送私有消息
        /// </summary>
        /// <param name="userId">接收人</param>
        /// <param name="message">消息</param>
        /// <returns></returns>
        public async Task SendPrivateMessage(string userId, string message)
        {
            await Clients.User(userId).ReceivedPrivateMessage(message);
        }
        #endregion

        #region 组
        /// <summary>
        /// 添加组
        /// </summary>
        /// <param name="groupName">组名称</param>
        /// <returns></returns>
        public async Task AddToGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await SendMessageToCaller($"{Context.ConnectionId} has joined the group {groupName}.");
        }
        /// <summary>
        /// 删除组
        /// </summary>
        /// <param name="groupName">组名称</param>
        /// <returns></returns>
        public async Task RemoveFromGroup(string groupName)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
            await SendMessageToCaller($"{Context.ConnectionId} has left the group {groupName}.");
        }
        /// <summary>
        /// 将消息发送至组
        /// </summary>
        /// <param name="groupName">组名称</param>
        /// <returns></returns>
        public async Task SendMessageToGroup(string groupName, string user, string message)
        {
            await Clients.Group(groupName).ReceivedMessageToGroup(user, message);
        }
        #endregion
    }
}
