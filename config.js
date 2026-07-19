window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b9a0427c795ef3753b0d860df3374301e1225b0c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b9a0427c795ef3753b0d860df3374301e1225b0c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
