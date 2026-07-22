window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f9c5be679cd26d29b451a56de38fdc788da5e7cd/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f9c5be679cd26d29b451a56de38fdc788da5e7cd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
