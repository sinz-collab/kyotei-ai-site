window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/121b0ae3872c7e9a90cdb21dcf35a101434727d6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/121b0ae3872c7e9a90cdb21dcf35a101434727d6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
