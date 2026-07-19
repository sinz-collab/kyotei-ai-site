window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f60fec2a13b4c0dd2c28f29297df57d950b213f9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f60fec2a13b4c0dd2c28f29297df57d950b213f9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
