window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/32add3e15e46bfd01c20fbb74ab5af440cc71e48/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/32add3e15e46bfd01c20fbb74ab5af440cc71e48/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
