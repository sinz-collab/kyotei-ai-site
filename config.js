window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4f246aa8c9c300d574a87af781d05010546e48fa/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4f246aa8c9c300d574a87af781d05010546e48fa/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
