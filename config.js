window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a01950c1bc742ad14cb1d3782ce0b1b3c9c47097/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/a01950c1bc742ad14cb1d3782ce0b1b3c9c47097/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
