window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5d7c268fe29be4fad28d64e3cb1743397fd8ecd8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/5d7c268fe29be4fad28d64e3cb1743397fd8ecd8/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
