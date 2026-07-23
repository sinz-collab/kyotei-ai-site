window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e53884cd16843effc18ec2a370ec4643ae8b97dd/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e53884cd16843effc18ec2a370ec4643ae8b97dd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
