window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4e74ca1fd2ca17bfc4bff9c07001b4553c8bdb32/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4e74ca1fd2ca17bfc4bff9c07001b4553c8bdb32/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
