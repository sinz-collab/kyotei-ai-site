window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/04447253c91e2a6a54c5bbda57493489e408a5ae/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/04447253c91e2a6a54c5bbda57493489e408a5ae/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
