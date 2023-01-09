using WebApp.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
{
    builder
        .SetIsOriginAllowed(_ => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials();
}));

builder.Services.AddSignalR();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("CorsPolicy");

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapHub<ChatHub>("/hub");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();
