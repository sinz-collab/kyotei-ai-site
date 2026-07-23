window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a5df1301251093e085c4a96143f4379f9f4c152/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3a5df1301251093e085c4a96143f4379f9f4c152/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
