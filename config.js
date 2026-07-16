window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3d7611d96d782e19ad3b9a40f91926e0e92ae15d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/3d7611d96d782e19ad3b9a40f91926e0e92ae15d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
