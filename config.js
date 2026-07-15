window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ee6cada09b5bc7bd061bd4502c2542e65dcc6c0a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ee6cada09b5bc7bd061bd4502c2542e65dcc6c0a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
