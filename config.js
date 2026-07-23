window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5f6702dc6c8d30acee4ffc98055d038d4bafc967/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5f6702dc6c8d30acee4ffc98055d038d4bafc967/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
