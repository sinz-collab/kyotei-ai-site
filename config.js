window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/76e57c636f6c756903d0b00384953732d17bdde5/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/76e57c636f6c756903d0b00384953732d17bdde5/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
