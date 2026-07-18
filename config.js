window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bbf5a5733efc685281c3db98cd99701d29e60dba/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/bbf5a5733efc685281c3db98cd99701d29e60dba/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
