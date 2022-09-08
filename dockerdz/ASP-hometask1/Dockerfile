FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

WORKDIR /app

COPY ASP-hometask1.sln ./
COPY ASP-hometask1/*.csproj ./ASP-hometask1/

RUN dotnet restore

COPY . ./
RUN dotnet publish ASP-hometask1.sln -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0

ENV ASPNETCORE_URLS=http://*:80
ENV ASPNETCORE_ENVIROMENT=Development

USER 1000

WORKDIR /app
COPY --from=build-env /app/out .

EXPOSE 7195
ENTRYPOINT ["dotnet", "ASP-hometask1.dll"]
