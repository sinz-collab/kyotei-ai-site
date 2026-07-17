window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/14f354c7494ec2be6e466d81ff2dab02dd9777f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/14f354c7494ec2be6e466d81ff2dab02dd9777f0/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
