const require=(await import("node:module")).createRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/jazz-wasm/pkg/jazz_wasm.js
var jazz_wasm_exports = {};
__export(jazz_wasm_exports, {
  WasmQueryBuilder: () => WasmQueryBuilder,
  WasmRuntime: () => WasmRuntime,
  bench_get_cache_bytes: () => bench_get_cache_bytes,
  bench_get_overflow_threshold_bytes: () => bench_get_overflow_threshold_bytes,
  bench_get_pin_internal_pages: () => bench_get_pin_internal_pages,
  bench_get_read_coalesce_pages: () => bench_get_read_coalesce_pages,
  bench_opfs_cold_random_read: () => bench_opfs_cold_random_read,
  bench_opfs_cold_sequential_read: () => bench_opfs_cold_sequential_read,
  bench_opfs_matrix: () => bench_opfs_matrix,
  bench_opfs_mixed_matrix: () => bench_opfs_mixed_matrix,
  bench_opfs_mixed_scenario: () => bench_opfs_mixed_scenario,
  bench_opfs_random_read: () => bench_opfs_random_read,
  bench_opfs_random_write: () => bench_opfs_random_write,
  bench_opfs_range_random_window: () => bench_opfs_range_random_window,
  bench_opfs_range_seq_window: () => bench_opfs_range_seq_window,
  bench_opfs_sequential_read: () => bench_opfs_sequential_read,
  bench_opfs_sequential_write: () => bench_opfs_sequential_write,
  bench_reset_cache_bytes: () => bench_reset_cache_bytes,
  bench_reset_overflow_threshold_bytes: () => bench_reset_overflow_threshold_bytes,
  bench_reset_pin_internal_pages: () => bench_reset_pin_internal_pages,
  bench_reset_read_coalesce_pages: () => bench_reset_read_coalesce_pages,
  bench_set_cache_bytes: () => bench_set_cache_bytes,
  bench_set_overflow_threshold_bytes: () => bench_set_overflow_threshold_bytes,
  bench_set_pin_internal_pages: () => bench_set_pin_internal_pages,
  bench_set_read_coalesce_pages: () => bench_set_read_coalesce_pages,
  currentTimestamp: () => currentTimestamp,
  default: () => __wbg_init,
  generateId: () => generateId,
  init: () => init,
  initSync: () => initSync,
  parseSchema: () => parseSchema
});
function bench_get_cache_bytes() {
  const ret = wasm.bench_get_cache_bytes();
  return ret >>> 0;
}
function bench_get_overflow_threshold_bytes() {
  const ret = wasm.bench_get_overflow_threshold_bytes();
  return ret >>> 0;
}
function bench_get_pin_internal_pages() {
  const ret = wasm.bench_get_pin_internal_pages();
  return ret !== 0;
}
function bench_get_read_coalesce_pages() {
  const ret = wasm.bench_get_read_coalesce_pages();
  return ret >>> 0;
}
function bench_opfs_cold_random_read(count, value_size) {
  const ret = wasm.bench_opfs_cold_random_read(count, value_size);
  return ret;
}
function bench_opfs_cold_sequential_read(count, value_size) {
  const ret = wasm.bench_opfs_cold_sequential_read(count, value_size);
  return ret;
}
function bench_opfs_matrix(count) {
  const ret = wasm.bench_opfs_matrix(count);
  return ret;
}
function bench_opfs_mixed_matrix(count) {
  const ret = wasm.bench_opfs_mixed_matrix(count);
  return ret;
}
function bench_opfs_mixed_scenario(scenario_name, count, value_size, base_seed) {
  const ptr0 = passStringToWasm0(scenario_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.bench_opfs_mixed_scenario(ptr0, len0, count, value_size, !isLikeNone(base_seed), isLikeNone(base_seed) ? BigInt(0) : base_seed);
  return ret;
}
function bench_opfs_random_read(count, value_size) {
  const ret = wasm.bench_opfs_random_read(count, value_size);
  return ret;
}
function bench_opfs_random_write(count, value_size) {
  const ret = wasm.bench_opfs_random_write(count, value_size);
  return ret;
}
function bench_opfs_range_random_window(count, value_size) {
  const ret = wasm.bench_opfs_range_random_window(count, value_size);
  return ret;
}
function bench_opfs_range_seq_window(count, value_size) {
  const ret = wasm.bench_opfs_range_seq_window(count, value_size);
  return ret;
}
function bench_opfs_sequential_read(count, value_size) {
  const ret = wasm.bench_opfs_sequential_read(count, value_size);
  return ret;
}
function bench_opfs_sequential_write(count, value_size) {
  const ret = wasm.bench_opfs_sequential_write(count, value_size);
  return ret;
}
function bench_reset_cache_bytes() {
  wasm.bench_reset_cache_bytes();
}
function bench_reset_overflow_threshold_bytes() {
  wasm.bench_reset_overflow_threshold_bytes();
}
function bench_reset_pin_internal_pages() {
  wasm.bench_reset_pin_internal_pages();
}
function bench_reset_read_coalesce_pages() {
  wasm.bench_reset_read_coalesce_pages();
}
function bench_set_cache_bytes(cache_bytes) {
  const ret = wasm.bench_set_cache_bytes(cache_bytes);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}
function bench_set_overflow_threshold_bytes(overflow_threshold_bytes) {
  const ret = wasm.bench_set_overflow_threshold_bytes(overflow_threshold_bytes);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}
function bench_set_pin_internal_pages(pin_internal_pages) {
  wasm.bench_set_pin_internal_pages(pin_internal_pages);
}
function bench_set_read_coalesce_pages(read_coalesce_pages) {
  const ret = wasm.bench_set_read_coalesce_pages(read_coalesce_pages);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}
function currentTimestamp() {
  const ret = wasm.currentTimestamp();
  return BigInt.asUintN(64, ret);
}
function generateId() {
  let deferred1_0;
  let deferred1_1;
  try {
    const ret = wasm.generateId();
    deferred1_0 = ret[0];
    deferred1_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function init() {
  wasm.init();
}
function parseSchema(json) {
  const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.parseSchema(ptr0, len0);
  if (ret[2]) {
    throw takeFromExternrefTable0(ret[1]);
  }
  return takeFromExternrefTable0(ret[0]);
}
function __wbg_get_imports() {
  const import0 = {
    __proto__: null,
    __wbg_Error_2e59b1b37a9a34c3: function(arg0, arg1) {
      const ret = Error(getStringFromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_Number_e6ffdb596c888833: function(arg0) {
      const ret = Number(arg0);
      return ret;
    },
    __wbg_String_8564e559799eccda: function(arg0, arg1) {
      const ret = String(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_bigint_get_as_i64_2c5082002e4826e2: function(arg0, arg1) {
      const v = arg1;
      const ret = typeof v === "bigint" ? v : void 0;
      getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_boolean_get_a86c216575a75c30: function(arg0) {
      const v = arg0;
      const ret = typeof v === "boolean" ? v : void 0;
      return isLikeNone(ret) ? 16777215 : ret ? 1 : 0;
    },
    __wbg___wbindgen_debug_string_dd5d2d07ce9e6c57: function(arg0, arg1) {
      const ret = debugString(arg1);
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_in_4bd7a57e54337366: function(arg0, arg1) {
      const ret = arg0 in arg1;
      return ret;
    },
    __wbg___wbindgen_is_bigint_6c98f7e945dacdde: function(arg0) {
      const ret = typeof arg0 === "bigint";
      return ret;
    },
    __wbg___wbindgen_is_function_49868bde5eb1e745: function(arg0) {
      const ret = typeof arg0 === "function";
      return ret;
    },
    __wbg___wbindgen_is_null_344c8750a8525473: function(arg0) {
      const ret = arg0 === null;
      return ret;
    },
    __wbg___wbindgen_is_object_40c5a80572e8f9d3: function(arg0) {
      const val = arg0;
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg___wbindgen_is_string_b29b5c5a8065ba1a: function(arg0) {
      const ret = typeof arg0 === "string";
      return ret;
    },
    __wbg___wbindgen_is_undefined_c0cca72b82b86f4d: function(arg0) {
      const ret = arg0 === void 0;
      return ret;
    },
    __wbg___wbindgen_jsval_eq_7d430e744a913d26: function(arg0, arg1) {
      const ret = arg0 === arg1;
      return ret;
    },
    __wbg___wbindgen_jsval_loose_eq_3a72ae764d46d944: function(arg0, arg1) {
      const ret = arg0 == arg1;
      return ret;
    },
    __wbg___wbindgen_number_get_7579aab02a8a620c: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "number" ? obj : void 0;
      getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    },
    __wbg___wbindgen_string_get_914df97fcfa788f2: function(arg0, arg1) {
      const obj = arg1;
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg___wbindgen_throw_81fc77679af83bc6: function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    },
    __wbg__wbg_cb_unref_3c3b4f651835fbcb: function(arg0) {
      arg0._wbg_cb_unref();
    },
    __wbg_call_368fa9c372d473ba: function() {
      return handleError(function(arg0, arg1, arg2, arg3) {
        const ret = arg0.call(arg1, arg2, arg3);
        return ret;
      }, arguments);
    },
    __wbg_call_7f2987183bb62793: function() {
      return handleError(function(arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
      }, arguments);
    },
    __wbg_call_aa6e1b9f65550dad: function() {
      return handleError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
        const ret = arg0.call(arg1, arg2, arg3, arg4, arg5);
        return ret;
      }, arguments);
    },
    __wbg_call_d578befcc3145dee: function() {
      return handleError(function(arg0, arg1, arg2) {
        const ret = arg0.call(arg1, arg2);
        return ret;
      }, arguments);
    },
    __wbg_clearTimeout_113b1cde814ec762: function(arg0) {
      const ret = clearTimeout(arg0);
      return ret;
    },
    __wbg_close_e526ab9e090e8cc1: function(arg0) {
      arg0.close();
    },
    __wbg_close_f181fdc02ee236e6: function() {
      return handleError(function(arg0) {
        arg0.close();
      }, arguments);
    },
    __wbg_code_8b9f98f9216b2f10: function(arg0) {
      const ret = arg0.code;
      return ret;
    },
    __wbg_code_c96efa5c1a80b2d9: function(arg0) {
      const ret = arg0.code;
      return ret;
    },
    __wbg_createSyncAccessHandle_3be98daf699667a7: function(arg0) {
      const ret = arg0.createSyncAccessHandle();
      return ret;
    },
    __wbg_crypto_38df2bab126b63dc: function(arg0) {
      const ret = arg0.crypto;
      return ret;
    },
    __wbg_data_60b50110c5bd9349: function(arg0) {
      const ret = arg0.data;
      return ret;
    },
    __wbg_debug_32973ac940f2ca14: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.debug(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_debug_982454fce39f6582: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.debug(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_done_547d467e97529006: function(arg0) {
      const ret = arg0.done;
      return ret;
    },
    __wbg_entries_616b1a459b85be0b: function(arg0) {
      const ret = Object.entries(arg0);
      return ret;
    },
    __wbg_error_1fd0a521bc586cb5: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_error_87093280954deb60: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_flush_63f2ba6bf37bcfd5: function() {
      return handleError(function(arg0) {
        arg0.flush();
      }, arguments);
    },
    __wbg_getDirectory_3af764c18446017f: function(arg0) {
      const ret = arg0.getDirectory();
      return ret;
    },
    __wbg_getFileHandle_326ca47811ae37a1: function(arg0, arg1, arg2, arg3) {
      const ret = arg0.getFileHandle(getStringFromWasm0(arg1, arg2), arg3);
      return ret;
    },
    __wbg_getRandomValues_3f44b700395062e5: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getRandomValues_c44a50d8cfdaebeb: function() {
      return handleError(function(arg0, arg1) {
        arg0.getRandomValues(arg1);
      }, arguments);
    },
    __wbg_getRandomValues_d49329ff89a07af1: function() {
      return handleError(function(arg0, arg1) {
        globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
      }, arguments);
    },
    __wbg_getSize_6037025a1b5d08db: function() {
      return handleError(function(arg0) {
        const ret = arg0.getSize();
        return ret;
      }, arguments);
    },
    __wbg_get_4848e350b40afc16: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_ed0642c4b9d31ddf: function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_f96702c6245e4ef9: function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_get_unchecked_7d7babe32e9e6a54: function(arg0, arg1) {
      const ret = arg0[arg1 >>> 0];
      return ret;
    },
    __wbg_get_with_ref_key_6412cf3094599694: function(arg0, arg1) {
      const ret = arg0[arg1];
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_ff7c1337a5e3b33a: function(arg0) {
      let result;
      try {
        result = arg0 instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Blob_6b3922471f5ba34c: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Blob;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_DomException_37f96d3fb69189bd: function(arg0) {
      let result;
      try {
        result = arg0 instanceof DOMException;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_FileSystemDirectoryHandle_66b8b1a90ca7b685: function(arg0) {
      let result;
      try {
        result = arg0 instanceof FileSystemDirectoryHandle;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_FileSystemFileHandle_2236115c7caa5120: function(arg0) {
      let result;
      try {
        result = arg0 instanceof FileSystemFileHandle;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_FileSystemSyncAccessHandle_0a420b0443c563b7: function(arg0) {
      let result;
      try {
        result = arg0 instanceof FileSystemSyncAccessHandle;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Map_a10a2795ef4bfe97: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Map;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Promise_95d523058012a13d: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Promise;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_Uint8Array_4b8da683deb25d72: function(arg0) {
      let result;
      try {
        result = arg0 instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_WorkerGlobalScope_2b48dbfbe7327543: function(arg0) {
      let result;
      try {
        result = arg0 instanceof WorkerGlobalScope;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_isArray_db61795ad004c139: function(arg0) {
      const ret = Array.isArray(arg0);
      return ret;
    },
    __wbg_isSafeInteger_ea83862ba994770c: function(arg0) {
      const ret = Number.isSafeInteger(arg0);
      return ret;
    },
    __wbg_iterator_de403ef31815a3e6: function() {
      const ret = Symbol.iterator;
      return ret;
    },
    __wbg_length_0c32cb8543c8e4c8: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_length_6e821edde497a532: function(arg0) {
      const ret = arg0.length;
      return ret;
    },
    __wbg_log_6a8b55ee2e172f54: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_log_a25c2a4d205f1618: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.log(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_mark_e4b209bb53de57a7: function(arg0, arg1) {
      performance.mark(getStringFromWasm0(arg0, arg1));
    },
    __wbg_measure_0cab89f3addcdc37: function() {
      return handleError(function(arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
          deferred0_0 = arg0;
          deferred0_1 = arg1;
          deferred1_0 = arg2;
          deferred1_1 = arg3;
          performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        } finally {
          wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
          wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }, arguments);
    },
    __wbg_message_52a9425f28c45ebc: function(arg0, arg1) {
      const ret = arg1.message;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_msCrypto_bd5a034af96bcba6: function(arg0) {
      const ret = arg0.msCrypto;
      return ret;
    },
    __wbg_navigator_af52153252bdf29d: function(arg0) {
      const ret = arg0.navigator;
      return ret;
    },
    __wbg_new_227d7c05414eb861: function() {
      const ret = new Error();
      return ret;
    },
    __wbg_new_40792555590ec35c: function(arg0, arg1) {
      try {
        var state0 = { a: arg0, b: arg1 };
        var cb0 = (arg02, arg12) => {
          const a = state0.a;
          state0.a = 0;
          try {
            return wasm_bindgen__convert__closures_____invoke__h250bbd6a67e0e1e6(a, state0.b, arg02, arg12);
          } finally {
            state0.a = a;
          }
        };
        const ret = new Promise(cb0);
        return ret;
      } finally {
        state0.a = 0;
      }
    },
    __wbg_new_4f9fafbb3909af72: function() {
      const ret = new Object();
      return ret;
    },
    __wbg_new_99cabae501c0a8a0: function() {
      const ret = /* @__PURE__ */ new Map();
      return ret;
    },
    __wbg_new_a2d8434834334bbf: function() {
      return handleError(function(arg0, arg1) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return ret;
      }, arguments);
    },
    __wbg_new_a560378ea1240b14: function(arg0) {
      const ret = new Uint8Array(arg0);
      return ret;
    },
    __wbg_new_e3b04b4d53d1b593: function(arg0, arg1) {
      const ret = new Error(getStringFromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_new_f3c9df4f38f3f798: function() {
      const ret = new Array();
      return ret;
    },
    __wbg_new_from_slice_2580ff33d0d10520: function(arg0, arg1) {
      const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
      return ret;
    },
    __wbg_new_typed_14d7cc391ce53d2c: function(arg0, arg1) {
      try {
        var state0 = { a: arg0, b: arg1 };
        var cb0 = (arg02, arg12) => {
          const a = state0.a;
          state0.a = 0;
          try {
            return wasm_bindgen__convert__closures_____invoke__h250bbd6a67e0e1e6(a, state0.b, arg02, arg12);
          } finally {
            state0.a = a;
          }
        };
        const ret = new Promise(cb0);
        return ret;
      } finally {
        state0.a = 0;
      }
    },
    __wbg_new_with_length_9cedd08484b73942: function(arg0) {
      const ret = new Uint8Array(arg0 >>> 0);
      return ret;
    },
    __wbg_new_with_str_sequence_e6b5bb982fdcf253: function() {
      return handleError(function(arg0, arg1, arg2) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1), arg2);
        return ret;
      }, arguments);
    },
    __wbg_next_01132ed6134b8ef5: function(arg0) {
      const ret = arg0.next;
      return ret;
    },
    __wbg_next_b3713ec761a9dbfd: function() {
      return handleError(function(arg0) {
        const ret = arg0.next();
        return ret;
      }, arguments);
    },
    __wbg_node_84ea875411254db1: function(arg0) {
      const ret = arg0.node;
      return ret;
    },
    __wbg_now_6798946be0e6fe2b: function() {
      return handleError(function() {
        const ret = Date.now();
        return ret;
      }, arguments);
    },
    __wbg_now_88621c9c9a4f3ffc: function() {
      const ret = Date.now();
      return ret;
    },
    __wbg_now_e7c6795a7f81e10f: function(arg0) {
      const ret = arg0.now();
      return ret;
    },
    __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
      const ret = arg0.performance;
      return ret;
    },
    __wbg_process_44c7a14e11e9f69e: function(arg0) {
      const ret = arg0.process;
      return ret;
    },
    __wbg_prototypesetcall_3e05eb9545565046: function(arg0, arg1, arg2) {
      Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    },
    __wbg_push_6bdbc990be5ac37b: function(arg0, arg1) {
      const ret = arg0.push(arg1);
      return ret;
    },
    __wbg_queueMicrotask_abaf92f0bd4e80a4: function(arg0) {
      const ret = arg0.queueMicrotask;
      return ret;
    },
    __wbg_queueMicrotask_df5a6dac26d818f3: function(arg0) {
      queueMicrotask(arg0);
    },
    __wbg_randomFillSync_6c25eac9869eb53c: function() {
      return handleError(function(arg0, arg1) {
        arg0.randomFillSync(arg1);
      }, arguments);
    },
    __wbg_random_a72d453e63c9558c: function() {
      const ret = Math.random();
      return ret;
    },
    __wbg_read_8569bf7e69cc3089: function() {
      return handleError(function(arg0, arg1, arg2, arg3) {
        const ret = arg0.read(getArrayU8FromWasm0(arg1, arg2), arg3);
        return ret;
      }, arguments);
    },
    __wbg_readyState_631d9f7c37e595d7: function(arg0) {
      const ret = arg0.readyState;
      return ret;
    },
    __wbg_reason_85e58391371e868d: function(arg0, arg1) {
      const ret = arg1.reason;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_require_b4edbdcf3e2a1ef0: function() {
      return handleError(function() {
        const ret = module.require;
        return ret;
      }, arguments);
    },
    __wbg_resolve_0a79de24e9d2267b: function(arg0) {
      const ret = Promise.resolve(arg0);
      return ret;
    },
    __wbg_send_4f53c94146f0274d: function() {
      return handleError(function(arg0, arg1, arg2) {
        arg0.send(getStringFromWasm0(arg1, arg2));
      }, arguments);
    },
    __wbg_send_64dd480ad0d86a31: function() {
      return handleError(function(arg0, arg1, arg2) {
        arg0.send(getArrayU8FromWasm0(arg1, arg2));
      }, arguments);
    },
    __wbg_setTimeout_90ea1b70d376baa9: function(arg0, arg1) {
      setTimeout(arg0, arg1);
    },
    __wbg_setTimeout_ef24d2fc3ad97385: function() {
      return handleError(function(arg0, arg1) {
        const ret = setTimeout(arg0, arg1);
        return ret;
      }, arguments);
    },
    __wbg_set_08463b1df38a7e29: function(arg0, arg1, arg2) {
      const ret = arg0.set(arg1, arg2);
      return ret;
    },
    __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
      arg0[arg1] = arg2;
    },
    __wbg_set_6c60b2e8ad0e9383: function(arg0, arg1, arg2) {
      arg0[arg1 >>> 0] = arg2;
    },
    __wbg_set_8ee2d34facb8466e: function() {
      return handleError(function(arg0, arg1, arg2) {
        const ret = Reflect.set(arg0, arg1, arg2);
        return ret;
      }, arguments);
    },
    __wbg_set_at_da2d1d4dc8ed37da: function(arg0, arg1) {
      arg0.at = arg1;
    },
    __wbg_set_binaryType_95c0a0f7586a3903: function(arg0, arg1) {
      arg0.binaryType = __wbindgen_enum_BinaryType[arg1];
    },
    __wbg_set_create_0654e513e8ccb2be: function(arg0, arg1) {
      arg0.create = arg1 !== 0;
    },
    __wbg_set_onclose_47cce56c686db4fb: function(arg0, arg1) {
      arg0.onclose = arg1;
    },
    __wbg_set_onerror_3db8bc3e52b2b10b: function(arg0, arg1) {
      arg0.onerror = arg1;
    },
    __wbg_set_onmessage_45bd33b110c54f5b: function(arg0, arg1) {
      arg0.onmessage = arg1;
    },
    __wbg_set_onopen_7ffeb01f8a628209: function(arg0, arg1) {
      arg0.onopen = arg1;
    },
    __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
      const ret = arg1.stack;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_static_accessor_GLOBAL_THIS_a1248013d790bf5f: function() {
      const ret = typeof globalThis === "undefined" ? null : globalThis;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_static_accessor_GLOBAL_f2e0f995a21329ff: function() {
      const ret = typeof global === "undefined" ? null : global;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_static_accessor_SELF_24f78b6d23f286ea: function() {
      const ret = typeof self === "undefined" ? null : self;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_static_accessor_WINDOW_59fd959c540fe405: function() {
      const ret = typeof window === "undefined" ? null : window;
      return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    },
    __wbg_storage_1d7efd3b54b4e6e9: function(arg0) {
      const ret = arg0.storage;
      return ret;
    },
    __wbg_subarray_0f98d3fb634508ad: function(arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    },
    __wbg_then_00eed3ac0b8e82cb: function(arg0, arg1, arg2) {
      const ret = arg0.then(arg1, arg2);
      return ret;
    },
    __wbg_then_a0c8db0381c8994c: function(arg0, arg1) {
      const ret = arg0.then(arg1);
      return ret;
    },
    __wbg_url_b9fa55c409492e65: function(arg0, arg1) {
      const ret = arg1.url;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
      getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    },
    __wbg_value_7f6052747ccf940f: function(arg0) {
      const ret = arg0.value;
      return ret;
    },
    __wbg_versions_276b2795b1c6a219: function(arg0) {
      const ret = arg0.versions;
      return ret;
    },
    __wbg_warn_173c62eb2a78dd0b: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.warn(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_warn_783eb0d84a16b85c: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.warn(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbg_wasClean_919e018e809fd9da: function(arg0) {
      const ret = arg0.wasClean;
      return ret;
    },
    __wbg_wasmruntime_new: function(arg0) {
      const ret = WasmRuntime.__wrap(arg0);
      return ret;
    },
    __wbg_write_726121caffd5fc3e: function() {
      return handleError(function(arg0, arg1, arg2, arg3) {
        const ret = arg0.write(getArrayU8FromWasm0(arg1, arg2), arg3);
        return ret;
      }, arguments);
    },
    __wbindgen_cast_0000000000000001: function(arg0, arg1) {
      const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h656199c36535c3e6);
      return ret;
    },
    __wbindgen_cast_0000000000000002: function(arg0, arg1) {
      const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__hf7ddf3622752ec36);
      return ret;
    },
    __wbindgen_cast_0000000000000003: function(arg0, arg1) {
      const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__hc18e08680cddc2e5);
      return ret;
    },
    __wbindgen_cast_0000000000000004: function(arg0, arg1) {
      const ret = makeMutClosure(arg0, arg1, wasm_bindgen__convert__closures_____invoke__h03757a48b3eba690);
      return ret;
    },
    __wbindgen_cast_0000000000000005: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000006: function(arg0) {
      const ret = arg0;
      return ret;
    },
    __wbindgen_cast_0000000000000007: function(arg0, arg1) {
      const ret = getArrayU8FromWasm0(arg0, arg1);
      return ret;
    },
    __wbindgen_cast_0000000000000008: function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return ret;
    },
    __wbindgen_cast_0000000000000009: function(arg0) {
      const ret = BigInt.asUintN(64, arg0);
      return ret;
    },
    __wbindgen_init_externref_table: function() {
      const table2 = wasm.__wbindgen_externrefs;
      const offset = table2.grow(4);
      table2.set(0, void 0);
      table2.set(offset + 0, void 0);
      table2.set(offset + 1, null);
      table2.set(offset + 2, true);
      table2.set(offset + 3, false);
    }
  };
  return {
    __proto__: null,
    "./jazz_wasm_bg.js": import0
  };
}
function wasm_bindgen__convert__closures_____invoke__h03757a48b3eba690(arg0, arg1) {
  wasm.wasm_bindgen__convert__closures_____invoke__h03757a48b3eba690(arg0, arg1);
}
function wasm_bindgen__convert__closures_____invoke__hf7ddf3622752ec36(arg0, arg1, arg2) {
  wasm.wasm_bindgen__convert__closures_____invoke__hf7ddf3622752ec36(arg0, arg1, arg2);
}
function wasm_bindgen__convert__closures_____invoke__hc18e08680cddc2e5(arg0, arg1, arg2) {
  wasm.wasm_bindgen__convert__closures_____invoke__hc18e08680cddc2e5(arg0, arg1, arg2);
}
function wasm_bindgen__convert__closures_____invoke__h656199c36535c3e6(arg0, arg1, arg2) {
  const ret = wasm.wasm_bindgen__convert__closures_____invoke__h656199c36535c3e6(arg0, arg1, arg2);
  if (ret[1]) {
    throw takeFromExternrefTable0(ret[0]);
  }
}
function wasm_bindgen__convert__closures_____invoke__h250bbd6a67e0e1e6(arg0, arg1, arg2, arg3) {
  wasm.wasm_bindgen__convert__closures_____invoke__h250bbd6a67e0e1e6(arg0, arg1, arg2, arg3);
}
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_externrefs.set(idx, obj);
  return idx;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return decodeText(ptr, len);
}
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
function makeMutClosure(arg0, arg1, f) {
  const state = { a: arg0, b: arg1, cnt: 1 };
  const real = (...args) => {
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      state.a = a;
      real._wbg_cb_unref();
    }
  };
  real._wbg_cb_unref = () => {
    if (--state.cnt === 0) {
      wasm.__wbindgen_destroy_closure(state.a, state.b);
      state.a = 0;
      CLOSURE_DTORS.unregister(state);
    }
  };
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  for (let i = 0; i < array.length; i++) {
    const add = addToExternrefTable0(array[i]);
    getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = cachedTextEncoder.encodeInto(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_externrefs.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
function decodeText(ptr, len) {
  numBytesDecoded += len;
  if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    numBytesDecoded = len;
  }
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
function __wbg_finalize_init(instance, module2) {
  wasm = instance.exports;
  wasmModule = module2;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        const validResponse = module2.ok && expectedResponseType(module2.type);
        if (validResponse && module2.headers.get("Content-Type") !== "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
  function expectedResponseType(type) {
    switch (type) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function initSync(module2) {
  if (wasm !== void 0) return wasm;
  if (module2 !== void 0) {
    if (Object.getPrototypeOf(module2) === Object.prototype) {
      ({ module: module2 } = module2);
    } else {
      console.warn("using deprecated parameters for `initSync()`; pass a single object instead");
    }
  }
  const imports = __wbg_get_imports();
  if (!(module2 instanceof WebAssembly.Module)) {
    module2 = new WebAssembly.Module(module2);
  }
  const instance = new WebAssembly.Instance(module2, imports);
  return __wbg_finalize_init(instance, module2);
}
async function __wbg_init(module_or_path) {
  if (wasm !== void 0) return wasm;
  if (module_or_path !== void 0) {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (module_or_path === void 0) {
    module_or_path = new URL("jazz_wasm_bg.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  const { instance, module: module2 } = await __wbg_load(await module_or_path, imports);
  return __wbg_finalize_init(instance, module2);
}
var WasmQueryBuilder, WasmRuntime, __wbindgen_enum_BinaryType, WasmQueryBuilderFinalization, WasmRuntimeFinalization, CLOSURE_DTORS, cachedDataViewMemory0, cachedUint8ArrayMemory0, cachedTextDecoder, MAX_SAFARI_DECODE_BYTES, numBytesDecoded, cachedTextEncoder, WASM_VECTOR_LEN, wasmModule, wasm;
var init_jazz_wasm = __esm({
  "node_modules/jazz-wasm/pkg/jazz_wasm.js"() {
    WasmQueryBuilder = class _WasmQueryBuilder {
      static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(_WasmQueryBuilder.prototype);
        obj.__wbg_ptr = ptr;
        WasmQueryBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmQueryBuilderFinalization.unregister(this);
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmquerybuilder_free(ptr, 0);
      }
      /**
       * Set a table alias.
       * @param {string} alias
       * @returns {WasmQueryBuilder}
       */
      alias(alias) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(alias, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_alias(ptr, ptr0, len0);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Set the branch to query.
       * @param {string} branch
       * @returns {WasmQueryBuilder}
       */
      branch(branch) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(branch, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_branch(ptr, ptr0, len0);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Set multiple branches to query.
       * @param {string[]} branches
       * @returns {WasmQueryBuilder}
       */
      branches(branches) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passArrayJsValueToWasm0(branches, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_branches(ptr, ptr0, len0);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Build the query and return as JSON string.
       * @returns {string}
       */
      build() {
        let deferred2_0;
        let deferred2_1;
        try {
          const ptr = this.__destroy_into_raw();
          const ret = wasm.wasmquerybuilder_build(ptr);
          var ptr1 = ret[0];
          var len1 = ret[1];
          if (ret[3]) {
            ptr1 = 0;
            len1 = 0;
            throw takeFromExternrefTable0(ret[2]);
          }
          deferred2_0 = ptr1;
          deferred2_1 = len1;
          return getStringFromWasm0(ptr1, len1);
        } finally {
          wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
      }
      /**
       * Build and return as JsValue.
       * @returns {any}
       */
      buildJs() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.wasmquerybuilder_buildJs(ptr);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Add an equals filter.
       * @param {string} column
       * @param {any} value
       * @returns {WasmQueryBuilder}
       */
      filterEq(column, value) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_filterEq(ptr, ptr0, len0, value);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return _WasmQueryBuilder.__wrap(ret[0]);
      }
      /**
       * Add a greater-than-or-equal filter.
       * @param {string} column
       * @param {any} value
       * @returns {WasmQueryBuilder}
       */
      filterGe(column, value) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_filterGe(ptr, ptr0, len0, value);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return _WasmQueryBuilder.__wrap(ret[0]);
      }
      /**
       * Add a greater-than filter.
       * @param {string} column
       * @param {any} value
       * @returns {WasmQueryBuilder}
       */
      filterGt(column, value) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_filterGt(ptr, ptr0, len0, value);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return _WasmQueryBuilder.__wrap(ret[0]);
      }
      /**
       * Add a less-than-or-equal filter.
       * @param {string} column
       * @param {any} value
       * @returns {WasmQueryBuilder}
       */
      filterLe(column, value) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_filterLe(ptr, ptr0, len0, value);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return _WasmQueryBuilder.__wrap(ret[0]);
      }
      /**
       * Add a less-than filter.
       * @param {string} column
       * @param {any} value
       * @returns {WasmQueryBuilder}
       */
      filterLt(column, value) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_filterLt(ptr, ptr0, len0, value);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return _WasmQueryBuilder.__wrap(ret[0]);
      }
      /**
       * Add a not-equals filter.
       * @param {string} column
       * @param {any} value
       * @returns {WasmQueryBuilder}
       */
      filterNe(column, value) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_filterNe(ptr, ptr0, len0, value);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return _WasmQueryBuilder.__wrap(ret[0]);
      }
      /**
       * Include soft-deleted rows.
       * @returns {WasmQueryBuilder}
       */
      includeDeleted() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.wasmquerybuilder_includeDeleted(ptr);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Join another table.
       * @param {string} table
       * @returns {WasmQueryBuilder}
       */
      join(table2) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_join(ptr, ptr0, len0);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Set a limit.
       * @param {number} n
       * @returns {WasmQueryBuilder}
       */
      limit(n) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.wasmquerybuilder_limit(ptr, n);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Create a new QueryBuilder for a table.
       * @param {string} table
       */
      constructor(table2) {
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        WasmQueryBuilderFinalization.register(this, this.__wbg_ptr, this);
        return this;
      }
      /**
       * Set an offset.
       * @param {number} n
       * @returns {WasmQueryBuilder}
       */
      offset(n) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.wasmquerybuilder_offset(ptr, n);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Specify join condition.
       * @param {string} left_col
       * @param {string} right_col
       * @returns {WasmQueryBuilder}
       */
      on(left_col, right_col) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(left_col, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(right_col, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_on(ptr, ptr0, len0, ptr1, len1);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Start a new OR branch.
       * @returns {WasmQueryBuilder}
       */
      or() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.wasmquerybuilder_or(ptr);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Add ascending order by.
       * @param {string} column
       * @returns {WasmQueryBuilder}
       */
      orderBy(column) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_orderBy(ptr, ptr0, len0);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Add descending order by.
       * @param {string} column
       * @returns {WasmQueryBuilder}
       */
      orderByDesc(column) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(column, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_orderByDesc(ptr, ptr0, len0);
        return _WasmQueryBuilder.__wrap(ret);
      }
      /**
       * Select specific columns.
       * @param {string[]} columns
       * @returns {WasmQueryBuilder}
       */
      select(columns) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passArrayJsValueToWasm0(columns, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmquerybuilder_select(ptr, ptr0, len0);
        return _WasmQueryBuilder.__wrap(ret);
      }
    };
    if (Symbol.dispose) WasmQueryBuilder.prototype[Symbol.dispose] = WasmQueryBuilder.prototype.free;
    WasmRuntime = class _WasmRuntime {
      static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(_WasmRuntime.prototype);
        obj.__wbg_ptr = ptr;
        WasmRuntimeFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmRuntimeFinalization.unregister(this);
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmruntime_free(ptr, 0);
      }
      /**
       * Debug helper: expose schema/lens state currently loaded in SchemaManager.
       * @returns {any}
       */
      __debugSchemaState() {
        const ret = wasm.wasmruntime___debugSchemaState(this.__wbg_ptr);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Debug helper: seed a historical schema and persist schema/lens catalogue objects.
       * @param {string} schema_json
       */
      __debugSeedLiveSchema(schema_json) {
        const ptr0 = passStringToWasm0(schema_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime___debugSeedLiveSchema(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * @param {string} batch_id
       * @returns {boolean}
       */
      acknowledgeRejectedBatch(batch_id) {
        const ptr0 = passStringToWasm0(batch_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_acknowledgeRejectedBatch(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] !== 0;
      }
      /**
       * Add a client connection (for server-side use in tests).
       * @returns {string}
       */
      addClient() {
        let deferred1_0;
        let deferred1_1;
        try {
          const ret = wasm.wasmruntime_addClient(this.__wbg_ptr);
          deferred1_0 = ret[0];
          deferred1_1 = ret[1];
          return getStringFromWasm0(ret[0], ret[1]);
        } finally {
          wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }
      /**
       * Add a server connection.
       *
       * After adding the server, immediately flushes the outbox so that
       * catalogue sync messages (from queue_full_sync_to_server) are sent
       * before the call returns, rather than being deferred to a microtask.
       * @param {string | null} [server_catalogue_state_hash]
       * @param {number | null} [next_sync_seq]
       */
      addServer(server_catalogue_state_hash, next_sync_seq) {
        var ptr0 = isLikeNone(server_catalogue_state_hash) ? 0 : passStringToWasm0(server_catalogue_state_hash, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_addServer(this.__wbg_ptr, ptr0, len0, !isLikeNone(next_sync_seq), isLikeNone(next_sync_seq) ? 0 : next_sync_seq);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Connect to a Jazz server over WebSocket.
       *
       * Parses `auth_json` into `AuthConfig`, wires a `TransportManager` into
       * `RuntimeCore`, and spawns the manager loop via `spawn_local`.
       * @param {string} url
       * @param {string} auth_json
       */
      connect(url, auth_json) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(auth_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_connect(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Phase 1 of 2-phase subscribe: allocate a handle and store query params.
       * No compilation, no sync, no tick — just bookkeeping.
       * @param {string} query_json
       * @param {string | null} [session_json]
       * @param {string | null} [settled_tier]
       * @param {string | null} [options_json]
       * @returns {number}
       */
      createSubscription(query_json, session_json, settled_tier, options_json) {
        const ptr0 = passStringToWasm0(query_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(session_json) ? 0 : passStringToWasm0(session_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(settled_tier) ? 0 : passStringToWasm0(settled_tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(options_json) ? 0 : passStringToWasm0(options_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_createSubscription(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0];
      }
      /**
       * Delete a row by ObjectId.
       * @param {string} object_id
       * @returns {any}
       */
      delete(object_id) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_delete(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Delete a row and return a Promise that resolves when the tier acks.
       * @param {string} object_id
       * @param {string} tier
       * @returns {Promise<any>}
       */
      deleteDurable(object_id, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_deleteDurable(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Delete a row and return a Promise that resolves when the tier acks,
       * scoped to an explicit session principal.
       * @param {string} object_id
       * @param {string | null | undefined} write_context_json
       * @param {string} tier
       * @returns {Promise<any>}
       */
      deleteDurableWithSession(object_id, write_context_json, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_deleteDurableWithSession(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Delete a row immediately, returning the logical batch id that tracks
       * replayable persisted fate for this write.
       * @param {string} object_id
       * @param {string} tier
       * @returns {any}
       */
      deletePersisted(object_id, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_deletePersisted(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Delete a row immediately, returning the logical batch id that tracks
       * replayable persisted fate for this write, scoped to an explicit session
       * principal or transactional write context.
       * @param {string} object_id
       * @param {string | null | undefined} write_context_json
       * @param {string} tier
       * @returns {any}
       */
      deletePersistedWithSession(object_id, write_context_json, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_deletePersistedWithSession(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Delete a row by ObjectId as an explicit session principal.
       * @param {string} object_id
       * @param {string | null} [write_context_json]
       * @returns {any}
       */
      deleteWithSession(object_id, write_context_json) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_deleteWithSession(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * @param {string} seed_b64
       * @returns {string}
       */
      static deriveUserId(seed_b64) {
        let deferred3_0;
        let deferred3_1;
        try {
          const ptr0 = passStringToWasm0(seed_b64, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len0 = WASM_VECTOR_LEN;
          const ret = wasm.wasmruntime_deriveUserId(ptr0, len0);
          var ptr2 = ret[0];
          var len2 = ret[1];
          if (ret[3]) {
            ptr2 = 0;
            len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
          }
          deferred3_0 = ptr2;
          deferred3_1 = len2;
          return getStringFromWasm0(ptr2, len2);
        } finally {
          wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
      }
      /**
       * Disconnect from the Jazz server and drop the transport handle.
       */
      disconnect() {
        wasm.wasmruntime_disconnect(this.__wbg_ptr);
      }
      /**
       * @returns {any}
       */
      drainRejectedBatchIds() {
        const ret = wasm.wasmruntime_drainRejectedBatchIds(this.__wbg_ptr);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Phase 2 of 2-phase subscribe: compile graph, register subscription,
       * sync to servers, attach callback, and deliver the first delta.
       *
       * No-ops silently if the handle was already unsubscribed.
       * @param {number} handle
       * @param {Function} on_update
       */
      executeSubscription(handle, on_update) {
        const ret = wasm.wasmruntime_executeSubscription(this.__wbg_ptr, handle, on_update);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Flush all data to persistent storage (snapshot).
       */
      flush() {
        wasm.wasmruntime_flush(this.__wbg_ptr);
      }
      /**
       * Flush only the WAL buffer to OPFS (not the snapshot).
       */
      flushWal() {
        wasm.wasmruntime_flushWal(this.__wbg_ptr);
      }
      /**
       * @param {string} seed_b64
       * @returns {string}
       */
      static getPublicKeyBase64url(seed_b64) {
        let deferred3_0;
        let deferred3_1;
        try {
          const ptr0 = passStringToWasm0(seed_b64, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len0 = WASM_VECTOR_LEN;
          const ret = wasm.wasmruntime_getPublicKeyBase64url(ptr0, len0);
          var ptr2 = ret[0];
          var len2 = ret[1];
          if (ret[3]) {
            ptr2 = 0;
            len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
          }
          deferred3_0 = ptr2;
          deferred3_1 = len2;
          return getStringFromWasm0(ptr2, len2);
        } finally {
          wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
      }
      /**
       * Get the current schema as JSON.
       * @returns {any}
       */
      getSchema() {
        const ret = wasm.wasmruntime_getSchema(this.__wbg_ptr);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Get the canonical schema hash (64-char hex).
       * @returns {string}
       */
      getSchemaHash() {
        let deferred1_0;
        let deferred1_1;
        try {
          const ret = wasm.wasmruntime_getSchemaHash(this.__wbg_ptr);
          deferred1_0 = ret[0];
          deferred1_1 = ret[1];
          return getStringFromWasm0(ret[0], ret[1]);
        } finally {
          wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
      }
      /**
       * Insert a row into a table.
       *
       * # Returns
       * The inserted row as `{ id, values, batchId }`.
       * @param {string} table
       * @param {any} values
       * @param {string | null} [object_id]
       * @returns {any}
       */
      insert(table2, values, object_id) {
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(object_id) ? 0 : passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_insert(this.__wbg_ptr, ptr0, len0, values, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Insert a row and return a Promise that resolves when the tier acks.
       *
       * `tier` must be one of: "local", "edge", "global".
       * @param {string} table
       * @param {any} values
       * @param {string} tier
       * @param {string | null} [object_id]
       * @returns {Promise<any>}
       */
      insertDurable(table2, values, tier, object_id) {
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(object_id) ? 0 : passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_insertDurable(this.__wbg_ptr, ptr0, len0, values, ptr1, len1, ptr2, len2);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Insert a row and return a Promise that resolves when the tier acks,
       * scoped to an explicit session principal.
       * @param {string} table
       * @param {any} values
       * @param {string | null | undefined} write_context_json
       * @param {string} tier
       * @param {string | null} [object_id]
       * @returns {Promise<any>}
       */
      insertDurableWithSession(table2, values, write_context_json, tier, object_id) {
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(object_id) ? 0 : passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_insertDurableWithSession(this.__wbg_ptr, ptr0, len0, values, ptr1, len1, ptr2, len2, ptr3, len3);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Insert a row immediately, returning the logical batch id that tracks
       * replayable persisted fate for this write.
       * @param {string} table
       * @param {any} values
       * @param {string} tier
       * @returns {any}
       */
      insertPersisted(table2, values, tier) {
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_insertPersisted(this.__wbg_ptr, ptr0, len0, values, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Insert a row immediately, returning the logical batch id that tracks
       * replayable persisted fate for this write, scoped to an explicit session
       * principal or transactional write context.
       * @param {string} table
       * @param {any} values
       * @param {string | null | undefined} write_context_json
       * @param {string} tier
       * @returns {any}
       */
      insertPersistedWithSession(table2, values, write_context_json, tier) {
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_insertPersistedWithSession(this.__wbg_ptr, ptr0, len0, values, ptr1, len1, ptr2, len2);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Insert a row into a table as an explicit session principal.
       * @param {string} table
       * @param {any} values
       * @param {string | null} [write_context_json]
       * @param {string | null} [object_id]
       * @returns {any}
       */
      insertWithSession(table2, values, write_context_json, object_id) {
        const ptr0 = passStringToWasm0(table2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(object_id) ? 0 : passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_insertWithSession(this.__wbg_ptr, ptr0, len0, values, ptr1, len1, ptr2, len2);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * @param {string} batch_id
       * @returns {any}
       */
      loadLocalBatchRecord(batch_id) {
        const ptr0 = passStringToWasm0(batch_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_loadLocalBatchRecord(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * @returns {any}
       */
      loadLocalBatchRecords() {
        const ret = wasm.wasmruntime_loadLocalBatchRecords(this.__wbg_ptr);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * @param {string} seed_b64
       * @param {string} issuer
       * @param {string} audience
       * @param {bigint} ttl_seconds
       * @param {bigint} now_seconds
       * @returns {string}
       */
      static mintJazzSelfSignedToken(seed_b64, issuer, audience, ttl_seconds, now_seconds) {
        let deferred5_0;
        let deferred5_1;
        try {
          const ptr0 = passStringToWasm0(seed_b64, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len0 = WASM_VECTOR_LEN;
          const ptr1 = passStringToWasm0(issuer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len1 = WASM_VECTOR_LEN;
          const ptr2 = passStringToWasm0(audience, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          const len2 = WASM_VECTOR_LEN;
          const ret = wasm.wasmruntime_mintJazzSelfSignedToken(ptr0, len0, ptr1, len1, ptr2, len2, ttl_seconds, now_seconds);
          var ptr4 = ret[0];
          var len4 = ret[1];
          if (ret[3]) {
            ptr4 = 0;
            len4 = 0;
            throw takeFromExternrefTable0(ret[2]);
          }
          deferred5_0 = ptr4;
          deferred5_1 = len4;
          return getStringFromWasm0(ptr4, len4);
        } finally {
          wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
        }
      }
      /**
       * Create a new WasmRuntime.
       *
       * Storage is synchronous (in-memory via MemoryStorage).
       *
       * # Arguments
       * * `schema_json` - JSON-encoded schema definition
       * * `app_id` - Application identifier
       * * `env` - Environment (e.g., "dev", "prod")
       * * `user_branch` - User's branch name (e.g., "main")
       * * `tier` - Optional node durability tier ("local", "edge", "global").
       *            Set for server nodes to enable ack emission.
       * * `use_binary_encoding` - Optional outgoing sync payload encoding mode.
       *   `Some(true)` emits postcard bytes (`Uint8Array`), otherwise JSON strings.
       * @param {string} schema_json
       * @param {string} app_id
       * @param {string} env
       * @param {string} user_branch
       * @param {string | null} [tier]
       * @param {boolean | null} [use_binary_encoding]
       */
      constructor(schema_json, app_id, env, user_branch, tier, use_binary_encoding) {
        const ptr0 = passStringToWasm0(schema_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(app_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(env, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(user_branch, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        var ptr4 = isLikeNone(tier) ? 0 : passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len4 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_new(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, isLikeNone(use_binary_encoding) ? 16777215 : use_binary_encoding ? 1 : 0);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        WasmRuntimeFinalization.register(this, this.__wbg_ptr, this);
        return this;
      }
      /**
       * Register a JS callback that fires when the Rust transport receives an
       * auth failure (Unauthorized) from the server during the WS handshake.
       *
       * The callback receives a single string argument: a human-readable reason.
       * @param {Function} callback
       */
      onAuthFailure(callback) {
        wasm.wasmruntime_onAuthFailure(this.__wbg_ptr, callback);
      }
      /**
       * Called by JS when a sync message arrives from the server.
       *
       * # Arguments
       * * `payload` - Either postcard-encoded SyncPayload bytes (`Uint8Array`)
       *   or JSON-encoded SyncPayload (`string`)
       * @param {any} payload
       * @param {number | null} [sequence]
       */
      onSyncMessageReceived(payload, sequence) {
        const ret = wasm.wasmruntime_onSyncMessageReceived(this.__wbg_ptr, payload, !isLikeNone(sequence), isLikeNone(sequence) ? 0 : sequence);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Called by JS when a sync message arrives from a client (not a server).
       *
       * # Arguments
       * * `client_id` - UUID string of the sending client
       * * `payload` - Postcard-encoded SyncPayload bytes
       * @param {string} client_id
       * @param {any} payload
       */
      onSyncMessageReceivedFromClient(client_id, payload) {
        const ptr0 = passStringToWasm0(client_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_onSyncMessageReceivedFromClient(this.__wbg_ptr, ptr0, len0, payload);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Register a callback for outgoing sync messages.
       * @param {Function} callback
       */
      onSyncMessageToSend(callback) {
        wasm.wasmruntime_onSyncMessageToSend(this.__wbg_ptr, callback);
      }
      /**
       * Create a persistent WasmRuntime backed by OPFS.
       *
       * Opens a single OPFS file namespace and restores state from the latest
       * durable checkpoint.
       * @param {string} schema_json
       * @param {string} app_id
       * @param {string} env
       * @param {string} user_branch
       * @param {string} db_name
       * @param {string | null | undefined} tier
       * @param {boolean} use_binary_encoding
       * @returns {Promise<WasmRuntime>}
       */
      static openPersistent(schema_json, app_id, env, user_branch, db_name, tier, use_binary_encoding) {
        const ptr0 = passStringToWasm0(schema_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(app_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(env, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(user_branch, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        const ptr4 = passStringToWasm0(db_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len4 = WASM_VECTOR_LEN;
        var ptr5 = isLikeNone(tier) ? 0 : passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len5 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_openPersistent(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, use_binary_encoding);
        return ret;
      }
      /**
       * Execute a query and return results as a Promise.
       *
       * Optional durability tier controls remote settlement behavior.
       * @param {string} query_json
       * @param {string | null} [session_json]
       * @param {string | null} [settled_tier]
       * @param {string | null} [options_json]
       * @returns {Promise<any>}
       */
      query(query_json, session_json, settled_tier, options_json) {
        const ptr0 = passStringToWasm0(query_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(session_json) ? 0 : passStringToWasm0(session_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(settled_tier) ? 0 : passStringToWasm0(settled_tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(options_json) ? 0 : passStringToWasm0(options_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_query(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Remove the current upstream server connection.
       */
      removeServer() {
        wasm.wasmruntime_removeServer(this.__wbg_ptr);
      }
      /**
       * @param {string} batch_id
       */
      sealBatch(batch_id) {
        const ptr0 = passStringToWasm0(batch_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_sealBatch(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Set a client's role.
       *
       * # Arguments
       * * `client_id` - UUID string of the client
       * * `role` - One of "user", "admin", "peer"
       * @param {string} client_id
       * @param {string} role
       */
      setClientRole(client_id, role) {
        const ptr0 = passStringToWasm0(client_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(role, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_setClientRole(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Subscribe to a query with a callback.
       *
       * Default behavior matches RuntimeCore:
       * - with upstream server: first callback waits for protocol QuerySettled convergence
       * - without upstream server: first callback is local-immediate
       *
       * Pass durability options to override this default.
       *
       * # Returns
       * Subscription handle (f64) for later unsubscription.
       * @param {string} query_json
       * @param {Function} on_update
       * @param {string | null} [session_json]
       * @param {string | null} [settled_tier]
       * @param {string | null} [options_json]
       * @returns {number}
       */
      subscribe(query_json, on_update, session_json, settled_tier, options_json) {
        const ptr0 = passStringToWasm0(query_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(session_json) ? 0 : passStringToWasm0(session_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(settled_tier) ? 0 : passStringToWasm0(settled_tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(options_json) ? 0 : passStringToWasm0(options_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_subscribe(this.__wbg_ptr, ptr0, len0, on_update, ptr1, len1, ptr2, len2, ptr3, len3);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0];
      }
      /**
       * Unsubscribe from a query.
       * @param {number} handle
       */
      unsubscribe(handle) {
        wasm.wasmruntime_unsubscribe(this.__wbg_ptr, handle);
      }
      /**
       * Update a row by ObjectId.
       * @param {string} object_id
       * @param {any} values
       * @returns {any}
       */
      update(object_id, values) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_update(this.__wbg_ptr, ptr0, len0, values);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Push updated auth credentials into the live transport.
       * @param {string} auth_json
       */
      updateAuth(auth_json) {
        const ptr0 = passStringToWasm0(auth_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_updateAuth(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
          throw takeFromExternrefTable0(ret[0]);
        }
      }
      /**
       * Update a row and return a Promise that resolves when the tier acks.
       * @param {string} object_id
       * @param {any} values
       * @param {string} tier
       * @returns {Promise<any>}
       */
      updateDurable(object_id, values, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_updateDurable(this.__wbg_ptr, ptr0, len0, values, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Update a row and return a Promise that resolves when the tier acks,
       * scoped to an explicit session principal.
       * @param {string} object_id
       * @param {any} values
       * @param {string | null | undefined} write_context_json
       * @param {string} tier
       * @returns {Promise<any>}
       */
      updateDurableWithSession(object_id, values, write_context_json, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_updateDurableWithSession(this.__wbg_ptr, ptr0, len0, values, ptr1, len1, ptr2, len2);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Update a row immediately, returning the logical batch id that tracks
       * replayable persisted fate for this write.
       * @param {string} object_id
       * @param {any} values
       * @param {string} tier
       * @returns {any}
       */
      updatePersisted(object_id, values, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_updatePersisted(this.__wbg_ptr, ptr0, len0, values, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Update a row immediately, returning the logical batch id that tracks
       * replayable persisted fate for this write, scoped to an explicit session
       * principal or transactional write context.
       * @param {string} object_id
       * @param {any} values
       * @param {string | null | undefined} write_context_json
       * @param {string} tier
       * @returns {any}
       */
      updatePersistedWithSession(object_id, values, write_context_json, tier) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(tier, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_updatePersistedWithSession(this.__wbg_ptr, ptr0, len0, values, ptr1, len1, ptr2, len2);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
      /**
       * Update a row by ObjectId as an explicit session principal.
       *
       * # Arguments
       * * `object_id` - UUID string of target object
       * * `values` - Partial update map (`{ columnName: Value }`)
       * * `session_json` - Optional JSON-encoded Session used for policy checks
       * @param {string} object_id
       * @param {any} values
       * @param {string | null} [write_context_json]
       * @returns {any}
       */
      updateWithSession(object_id, values, write_context_json) {
        const ptr0 = passStringToWasm0(object_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(write_context_json) ? 0 : passStringToWasm0(write_context_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.wasmruntime_updateWithSession(this.__wbg_ptr, ptr0, len0, values, ptr1, len1);
        if (ret[2]) {
          throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
      }
    };
    if (Symbol.dispose) WasmRuntime.prototype[Symbol.dispose] = WasmRuntime.prototype.free;
    __wbindgen_enum_BinaryType = ["blob", "arraybuffer"];
    WasmQueryBuilderFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
    }, unregister: () => {
    } } : new FinalizationRegistry((ptr) => wasm.__wbg_wasmquerybuilder_free(ptr >>> 0, 1));
    WasmRuntimeFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
    }, unregister: () => {
    } } : new FinalizationRegistry((ptr) => wasm.__wbg_wasmruntime_free(ptr >>> 0, 1));
    CLOSURE_DTORS = typeof FinalizationRegistry === "undefined" ? { register: () => {
    }, unregister: () => {
    } } : new FinalizationRegistry((state) => wasm.__wbindgen_destroy_closure(state.a, state.b));
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    MAX_SAFARI_DECODE_BYTES = 2146435072;
    numBytesDecoded = 0;
    cachedTextEncoder = new TextEncoder();
    if (!("encodeInto" in cachedTextEncoder)) {
      cachedTextEncoder.encodeInto = function(arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
          read: arg.length,
          written: buf.length
        };
      };
    }
    WASM_VECTOR_LEN = 0;
  }
});

// skills/share-diagram/scripts/grant-server.src.mjs
import http from "node:http";
import { pathToFileURL } from "node:url";

// skills/share-diagram/scripts/identity-store.src.mjs
import { chmodSync, mkdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";

// node_modules/jazz-tools/dist/magic-columns.js
var RESERVED_MAGIC_COLUMN_PREFIX = "$";
var PERMISSION_INTROSPECTION_COLUMNS = ["$canRead", "$canEdit", "$canDelete"];
var PROVENANCE_MAGIC_COLUMNS = [
  "$createdBy",
  "$createdAt",
  "$updatedBy",
  "$updatedAt"
];
function isPermissionIntrospectionColumn(column) {
  return PERMISSION_INTROSPECTION_COLUMNS.includes(column);
}
function isReservedMagicColumnName(column) {
  return column.startsWith(RESERVED_MAGIC_COLUMN_PREFIX);
}
function assertUserColumnNameAllowed(column) {
  if (isReservedMagicColumnName(column)) {
    throw new Error(`Column name "${column}" is reserved for magic columns. Names starting with "${RESERVED_MAGIC_COLUMN_PREFIX}" are reserved for system fields.`);
  }
}
function magicColumnType(column) {
  if (isPermissionIntrospectionColumn(column)) {
    return { type: "Boolean" };
  }
  if (column === "$createdBy" || column === "$updatedBy") {
    return { type: "Text" };
  }
  if (column === "$createdAt" || column === "$updatedAt") {
    return { type: "Timestamp" };
  }
  return void 0;
}

// node_modules/jazz-tools/dist/dsl.js
function normalizeEnumVariants(variants) {
  if (variants.length === 0) {
    throw new Error("Enum columns require at least one variant.");
  }
  for (const variant of variants) {
    if (variant.length === 0) {
      throw new Error("Enum variants cannot be empty strings.");
    }
  }
  const unique = new Set(variants);
  if (unique.size !== variants.length) {
    throw new Error("Enum variants must be unique.");
  }
  return [...unique].sort((a, b) => a.localeCompare(b));
}
function isJsonObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function normalizeJsonSchema(schema2) {
  const maybeStandard = schema2["~standard"];
  const converter = maybeStandard?.jsonSchema?.input;
  if (typeof converter === "function") {
    const converted = converter({ target: "draft-07" });
    if (!isJsonObject(converted)) {
      throw new Error("JSON schema conversion failed: expected an object from ~standard.jsonSchema.input(...).");
    }
    return converted;
  }
  if (!isJsonObject(schema2)) {
    throw new Error("JSON schema must be an object or implement ~standard.jsonSchema.");
  }
  return schema2;
}
function jsonColumn(schema2) {
  return new JsonBuilder(schema2);
}
function normalizeColumnMergeStrategy(strategy, sqlType, nullable) {
  if (strategy === "lww") {
    return void 0;
  }
  if (sqlType !== "INTEGER" || nullable) {
    throw new Error("Counter merge strategy is only supported on non-nullable INTEGER columns.");
  }
  return "counter";
}
var ScalarBuilder = class {
  _sqlType;
  _nullable = false;
  _default = void 0;
  _mergeStrategy;
  constructor(_sqlType) {
    this._sqlType = _sqlType;
  }
  optional() {
    if (this._mergeStrategy === "counter") {
      throw new Error("Counter merge strategy is only supported on non-nullable INTEGER columns.");
    }
    this._nullable = true;
    return this;
  }
  default(value) {
    this._default = value;
    return this;
  }
  merge(strategy) {
    this._mergeStrategy = normalizeColumnMergeStrategy(strategy, this._sqlType, this._nullable);
    return this;
  }
  _build(name) {
    return {
      name,
      sqlType: this._sqlType,
      nullable: this._nullable,
      ...this._default === void 0 ? {} : { default: this._default },
      ...this._mergeStrategy === void 0 ? {} : { mergeStrategy: this._mergeStrategy }
    };
  }
  get _references() {
    return void 0;
  }
};
var EnumBuilder = class {
  _nullable = false;
  _default = void 0;
  _mergeStrategy;
  _sqlType;
  constructor(...variants) {
    this._sqlType = { kind: "ENUM", variants: normalizeEnumVariants(variants) };
  }
  optional() {
    if (this._mergeStrategy === "counter") {
      throw new Error("Counter merge strategy is only supported on non-nullable INTEGER columns.");
    }
    this._nullable = true;
    return this;
  }
  default(value) {
    this._default = value;
    return this;
  }
  merge(strategy) {
    this._mergeStrategy = normalizeColumnMergeStrategy(strategy, this._sqlType, this._nullable);
    return this;
  }
  _build(name) {
    return {
      name,
      sqlType: this._sqlType,
      nullable: this._nullable,
      ...this._default === void 0 ? {} : { default: this._default },
      ...this._mergeStrategy === void 0 ? {} : { mergeStrategy: this._mergeStrategy }
    };
  }
  get _references() {
    return void 0;
  }
};
var JsonBuilder = class {
  _nullable = false;
  _default = void 0;
  _mergeStrategy;
  _sqlType;
  constructor(schema2) {
    this._sqlType = schema2 ? { kind: "JSON", schema: normalizeJsonSchema(schema2) } : { kind: "JSON" };
  }
  optional() {
    if (this._mergeStrategy === "counter") {
      throw new Error("Counter merge strategy is only supported on non-nullable INTEGER columns.");
    }
    this._nullable = true;
    return this;
  }
  default(value) {
    this._default = value;
    return this;
  }
  merge(strategy) {
    this._mergeStrategy = normalizeColumnMergeStrategy(strategy, this._sqlType, this._nullable);
    return this;
  }
  _build(name) {
    return {
      name,
      sqlType: this._sqlType,
      nullable: this._nullable,
      ...this._default === void 0 ? {} : { default: this._default },
      ...this._mergeStrategy === void 0 ? {} : { mergeStrategy: this._mergeStrategy }
    };
  }
  get _references() {
    return void 0;
  }
};
var RefBuilder = class {
  _targetTable;
  _nullable = false;
  _default = void 0;
  _mergeStrategy;
  constructor(_targetTable) {
    this._targetTable = _targetTable;
  }
  optional() {
    if (this._mergeStrategy === "counter") {
      throw new Error("Counter merge strategy is only supported on non-nullable INTEGER columns.");
    }
    this._nullable = true;
    return this;
  }
  default(value) {
    this._default = value;
    return this;
  }
  merge(strategy) {
    this._mergeStrategy = normalizeColumnMergeStrategy(strategy, this._sqlType, this._nullable);
    return this;
  }
  _build(name) {
    return {
      name,
      sqlType: this._sqlType,
      nullable: this._nullable,
      ...this._default === void 0 ? {} : { default: this._default },
      ...this._mergeStrategy === void 0 ? {} : { mergeStrategy: this._mergeStrategy },
      references: this._references
    };
  }
  get _sqlType() {
    return "UUID";
  }
  get _references() {
    return this._targetTable;
  }
};
var ArrayBuilder = class {
  _element;
  _nullable = false;
  _default = void 0;
  _mergeStrategy;
  constructor(_element) {
    this._element = _element;
  }
  optional() {
    if (this._mergeStrategy === "counter") {
      throw new Error("Counter merge strategy is only supported on non-nullable INTEGER columns.");
    }
    this._nullable = true;
    return this;
  }
  default(value) {
    this._default = value;
    return this;
  }
  merge(strategy) {
    this._mergeStrategy = normalizeColumnMergeStrategy(strategy, this._sqlType, this._nullable);
    return this;
  }
  _build(name) {
    return {
      name,
      sqlType: this._sqlType,
      nullable: this._nullable,
      ...this._default === void 0 ? {} : { default: this._default },
      ...this._mergeStrategy === void 0 ? {} : { mergeStrategy: this._mergeStrategy },
      references: this._references
    };
  }
  get _sqlType() {
    return { kind: "ARRAY", element: this._element._sqlType };
  }
  get _references() {
    return this._element._references;
  }
};
function isTypedColumnBuilder(value) {
  return typeof value === "object" && value !== null && "_build" in value && "_sqlType" in value;
}
var AddBuilder = class {
  string(opts) {
    return { _type: "add", sqlType: "TEXT", default: opts.default };
  }
  int(opts) {
    return { _type: "add", sqlType: "INTEGER", default: opts.default };
  }
  timestamp(opts) {
    return { _type: "add", sqlType: "TIMESTAMP", default: opts.default };
  }
  boolean(opts) {
    return { _type: "add", sqlType: "BOOLEAN", default: opts.default };
  }
  float(opts) {
    return { _type: "add", sqlType: "REAL", default: opts.default };
  }
  bytes(opts) {
    return { _type: "add", sqlType: "BYTEA", default: opts.default };
  }
  ref(_targetTable, opts) {
    return { _type: "add", sqlType: "UUID", default: opts.default };
  }
  json(opts) {
    return {
      _type: "add",
      sqlType: opts.schema ? { kind: "JSON", schema: normalizeJsonSchema(opts.schema) } : { kind: "JSON" },
      default: opts.default
    };
  }
  enum(...args) {
    const opts = args[args.length - 1];
    const variants = normalizeEnumVariants(args.slice(0, -1));
    return {
      _type: "add",
      sqlType: { kind: "ENUM", variants },
      default: opts.default
    };
  }
  array(opts) {
    return {
      _type: "add",
      sqlType: {
        kind: "ARRAY",
        element: isTypedColumnBuilder(opts.of) ? opts.of._sqlType : opts.of
      },
      default: opts.default
    };
  }
  optional() {
    return this;
  }
};
var DropBuilder = class {
  string(opts) {
    return { _type: "drop", sqlType: "TEXT", backwardsDefault: opts.backwardsDefault };
  }
  int(opts) {
    return { _type: "drop", sqlType: "INTEGER", backwardsDefault: opts.backwardsDefault };
  }
  timestamp(opts) {
    return { _type: "drop", sqlType: "TIMESTAMP", backwardsDefault: opts.backwardsDefault };
  }
  boolean(opts) {
    return { _type: "drop", sqlType: "BOOLEAN", backwardsDefault: opts.backwardsDefault };
  }
  float(opts) {
    return { _type: "drop", sqlType: "REAL", backwardsDefault: opts.backwardsDefault };
  }
  bytes(opts) {
    return { _type: "drop", sqlType: "BYTEA", backwardsDefault: opts.backwardsDefault };
  }
  ref(_targetTable, opts) {
    return { _type: "drop", sqlType: "UUID", backwardsDefault: opts.backwardsDefault };
  }
  json(opts) {
    return {
      _type: "drop",
      sqlType: opts.schema ? { kind: "JSON", schema: normalizeJsonSchema(opts.schema) } : { kind: "JSON" },
      backwardsDefault: opts.backwardsDefault
    };
  }
  enum(...args) {
    const opts = args[args.length - 1];
    const variants = normalizeEnumVariants(args.slice(0, -1));
    return {
      _type: "drop",
      sqlType: { kind: "ENUM", variants },
      backwardsDefault: opts.backwardsDefault
    };
  }
  array(opts) {
    return {
      _type: "drop",
      sqlType: {
        kind: "ARRAY",
        element: isTypedColumnBuilder(opts.of) ? opts.of._sqlType : opts.of
      },
      backwardsDefault: opts.backwardsDefault
    };
  }
  optional() {
    return this;
  }
};
var col = {
  // Schema context
  string: () => new ScalarBuilder("TEXT"),
  boolean: () => new ScalarBuilder("BOOLEAN"),
  int: () => new ScalarBuilder("INTEGER"),
  timestamp: () => new ScalarBuilder("TIMESTAMP"),
  float: () => new ScalarBuilder("REAL"),
  bytes: () => new ScalarBuilder("BYTEA"),
  json: jsonColumn,
  enum: (...variants) => new EnumBuilder(...variants),
  ref: (targetTable) => new RefBuilder(targetTable),
  array: (element) => new ArrayBuilder(element),
  // Migration context
  add: new AddBuilder(),
  drop: new DropBuilder(),
  rename: (oldName) => ({ _type: "rename", oldName }),
  renameFrom: (oldName) => ({
    _type: "rename",
    oldName
  })
};

// node_modules/jazz-tools/dist/runtime/json-text.js
function toJsonText(value) {
  if (typeof value === "string") {
    return value;
  }
  let encoded;
  try {
    encoded = JSON.stringify(value);
  } catch (error) {
    throw new Error(`JSON values must be serializable: ${error instanceof Error ? error.message : String(error)}`);
  }
  if (encoded === void 0) {
    throw new Error("JSON values must be serializable");
  }
  return encoded;
}

// node_modules/jazz-tools/dist/runtime/value-converter.js
function toTimestampMs(value) {
  const numeric = value instanceof Date ? value.getTime() : Number(value);
  if (!Number.isFinite(numeric)) {
    throw new Error("Invalid timestamp value. Expected Date or finite number.");
  }
  return numeric;
}
function normalizeByteaValue(value) {
  if (value instanceof Uint8Array) {
    return value;
  }
  if (Array.isArray(value)) {
    const bytes = value.map((entry) => {
      const n = Number(entry);
      if (!Number.isInteger(n) || n < 0 || n > 255) {
        throw new Error("Bytea arrays must contain integers in range 0..255");
      }
      return n;
    });
    return new Uint8Array(bytes);
  }
  throw new Error("Expected Uint8Array or byte array for Bytea column type");
}
function toValue(value, columnType) {
  if (value === null || value === void 0) {
    return { type: "Null" };
  }
  switch (columnType.type) {
    case "Text":
      return { type: "Text", value: String(value) };
    case "Boolean":
      return { type: "Boolean", value: Boolean(value) };
    case "Integer":
      return { type: "Integer", value: Number(value) };
    case "BigInt":
      return { type: "BigInt", value: Number(value) };
    case "Double":
      return { type: "Double", value: Number(value) };
    case "Timestamp":
      return { type: "Timestamp", value: toTimestampMs(value) };
    case "Uuid":
      return { type: "Uuid", value: String(value) };
    case "Bytea": {
      return { type: "Bytea", value: normalizeByteaValue(value) };
    }
    case "Json":
      return { type: "Text", value: toJsonText(value) };
    case "Enum": {
      const enumValue = String(value);
      if (!columnType.variants.includes(enumValue)) {
        throw new Error(`Invalid enum value "${enumValue}". Expected one of: ${columnType.variants.join(", ")}`);
      }
      return { type: "Text", value: enumValue };
    }
    case "Array": {
      if (!Array.isArray(value)) {
        throw new Error(`Expected array for Array column type, got ${typeof value}`);
      }
      const elementType = columnType.element;
      return {
        type: "Array",
        value: value.map((v) => toValue(v, elementType))
      };
    }
    case "Row": {
      if (typeof value !== "object" || value === null) {
        throw new Error(`Expected object for Row column type, got ${typeof value}`);
      }
      const rowValue = value;
      const columns = columnType.columns;
      return {
        type: "Row",
        value: { values: columns.map((col2) => toValue(rowValue[col2.name], col2.column_type)) }
      };
    }
    default:
      throw new Error(`Unsupported column type: ${columnType.type}`);
  }
}
function toInsertRecord(data, schema2, tableName) {
  const table2 = schema2[tableName];
  if (!table2) {
    throw new Error(`Unknown table "${tableName}"`);
  }
  const result = {};
  for (const [key, value] of Object.entries(data)) {
    if (value === void 0)
      continue;
    const col2 = table2.columns.find((c) => c.name === key);
    if (!col2) {
      throw new Error(`Unknown column "${key}" on table "${tableName}"`);
    }
    if (value === null && !col2.nullable) {
      throw new Error(`Cannot set required field '${key}' to null`);
    }
    result[key] = toValue(value, col2.column_type);
  }
  return result;
}
function toUpdateRecord(data, schema2, tableName) {
  const table2 = schema2[tableName];
  if (!table2) {
    throw new Error(`Unknown table "${tableName}"`);
  }
  const result = {};
  for (const [key, value] of Object.entries(data)) {
    if (value === void 0)
      continue;
    const col2 = table2.columns.find((c) => c.name === key);
    if (!col2) {
      throw new Error(`Unknown column "${key}" on table "${tableName}"`);
    }
    if (value === null && !col2.nullable) {
      throw new Error(`Cannot set required field '${key}' to null`);
    }
    result[key] = toValue(value, col2.column_type);
  }
  return result;
}

// node_modules/jazz-tools/dist/codegen/schema-reader.js
var map = {
  TEXT: { type: "Text" },
  BOOLEAN: { type: "Boolean" },
  INTEGER: { type: "Integer" },
  REAL: { type: "Double" },
  TIMESTAMP: { type: "Timestamp" },
  UUID: { type: "Uuid" },
  BYTEA: { type: "Bytea" }
};
function sqlTypeToWasm(sqlType) {
  if (typeof sqlType !== "string") {
    if (sqlType.kind === "ENUM") {
      return { type: "Enum", variants: [...sqlType.variants] };
    }
    if (sqlType.kind === "JSON") {
      return {
        type: "Json",
        schema: sqlType.schema
      };
    }
    return { type: "Array", element: sqlTypeToWasm(sqlType.element) };
  }
  return map[sqlType];
}
function literalToWasmValue(value) {
  if (value instanceof Uint8Array) {
    return { type: "Bytea", value };
  }
  if (value === null) {
    return { type: "Null" };
  }
  if (typeof value === "string") {
    return { type: "Text", value };
  }
  if (typeof value === "boolean") {
    return { type: "Boolean", value };
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value) || !Number.isInteger(value)) {
      throw new Error("Policy literal numbers must be finite integers");
    }
    if (value >= -2147483648 && value <= 2147483647) {
      return { type: "Integer", value };
    }
    return { type: "BigInt", value };
  }
  if (Array.isArray(value)) {
    return {
      type: "Array",
      value: value.map((inner) => literalToWasmValue(inner))
    };
  }
  throw new Error(`Unsupported policy literal type: ${typeof value}`);
}
function columnMergeStrategyToWasm(strategy) {
  switch (strategy) {
    case void 0:
      return void 0;
    case "counter":
      return "Counter";
  }
}
function clonePolicyValue(value) {
  if (value.type === "SessionRef") {
    return { type: "SessionRef", path: [...value.path] };
  }
  return { type: "Literal", value: literalToWasmValue(value.value) };
}
function clonePolicyLiteralValue(value) {
  return literalToWasmValue(value.value);
}
function clonePolicyExpr(expr) {
  switch (expr.type) {
    case "Cmp":
      return {
        type: "Cmp",
        column: expr.column,
        op: expr.op,
        value: clonePolicyValue(expr.value)
      };
    case "SessionCmp":
      return {
        type: "SessionCmp",
        path: [...expr.path],
        op: expr.op,
        value: clonePolicyLiteralValue(expr.value)
      };
    case "IsNull":
      return { type: "IsNull", column: expr.column };
    case "SessionIsNull":
      return { type: "SessionIsNull", path: [...expr.path] };
    case "IsNotNull":
      return { type: "IsNotNull", column: expr.column };
    case "SessionIsNotNull":
      return { type: "SessionIsNotNull", path: [...expr.path] };
    case "Contains":
      return {
        type: "Contains",
        column: expr.column,
        value: clonePolicyValue(expr.value)
      };
    case "SessionContains":
      return {
        type: "SessionContains",
        path: [...expr.path],
        value: clonePolicyLiteralValue(expr.value)
      };
    case "In":
      return {
        type: "In",
        column: expr.column,
        session_path: [...expr.session_path]
      };
    case "InList":
      return {
        type: "InList",
        column: expr.column,
        values: expr.values.map(clonePolicyValue)
      };
    case "SessionInList":
      return {
        type: "SessionInList",
        path: [...expr.path],
        values: expr.values.map(clonePolicyLiteralValue)
      };
    case "Exists":
      return {
        type: "Exists",
        table: expr.table,
        condition: clonePolicyExpr(expr.condition)
      };
    case "ExistsRel":
      throw new Error("Policy ExistsRel is not supported in schemaToWasm(). Use definePermissions() relation IR path instead.");
    case "Inherits":
      return {
        type: "Inherits",
        operation: expr.operation,
        via_column: expr.via_column,
        ...expr.max_depth === void 0 ? {} : { max_depth: expr.max_depth }
      };
    case "InheritsReferencing":
      return {
        type: "InheritsReferencing",
        operation: expr.operation,
        source_table: expr.source_table,
        via_column: expr.via_column,
        ...expr.max_depth === void 0 ? {} : { max_depth: expr.max_depth }
      };
    case "And":
      return { type: "And", exprs: expr.exprs.map(clonePolicyExpr) };
    case "Or":
      return { type: "Or", exprs: expr.exprs.map(clonePolicyExpr) };
    case "Not":
      return { type: "Not", expr: clonePolicyExpr(expr.expr) };
    case "True":
      return { type: "True" };
    case "False":
      return { type: "False" };
  }
}
function cloneOperationPolicy(policy) {
  const out = {};
  if (!policy) {
    return out;
  }
  if (policy.using) {
    out.using = clonePolicyExpr(policy.using);
  }
  if (policy.with_check) {
    out.with_check = clonePolicyExpr(policy.with_check);
  }
  return out;
}
function clonePolicies(policies) {
  return {
    select: cloneOperationPolicy(policies.select),
    insert: cloneOperationPolicy(policies.insert),
    update: cloneOperationPolicy(policies.update),
    delete: cloneOperationPolicy(policies.delete)
  };
}
function schemaToWasm(schema2) {
  const tables = {};
  for (const table2 of schema2.tables) {
    const columns = table2.columns.map((col2) => {
      const columnType = sqlTypeToWasm(col2.sqlType);
      if (col2.mergeStrategy === "counter" && (col2.sqlType !== "INTEGER" || col2.nullable)) {
        throw new Error("Counter merge strategy is only supported on non-nullable INTEGER columns.");
      }
      const descriptor = {
        name: col2.name,
        column_type: columnType,
        nullable: col2.nullable
      };
      if (col2.default !== void 0) {
        descriptor.default = toValue(col2.default, columnType);
      }
      if (col2.references) {
        descriptor.references = col2.references;
      }
      if (col2.mergeStrategy) {
        descriptor.merge_strategy = columnMergeStrategyToWasm(col2.mergeStrategy);
      }
      return descriptor;
    });
    tables[table2.name] = {
      columns,
      policies: table2.policies ? clonePolicies(table2.policies) : void 0
    };
  }
  return tables;
}

// node_modules/jazz-tools/dist/typed-app.js
var DefinedTable = class _DefinedTable {
  columns;
  indexes;
  __jazzTableDefinition = true;
  constructor(columns, indexes = []) {
    this.columns = columns;
    this.indexes = indexes;
  }
  index(name, columns) {
    const normalizedName = name.trim();
    if (!normalizedName) {
      throw new Error("table.index(...) requires a non-empty index name.");
    }
    const normalizedColumns = [...columns];
    for (const column of normalizedColumns) {
      if (!(column in this.columns)) {
        throw new Error(`table.index(...) references unknown column "${column}".`);
      }
    }
    return new _DefinedTable(this.columns, [
      ...this.indexes,
      {
        name: normalizedName,
        columns: normalizedColumns
      }
    ]);
  }
};
function defineTable(columns) {
  return new DefinedTable(columns);
}
function cloneBuiltCondition(condition) {
  return { ...condition };
}
function cloneBuiltRelation(relation) {
  return {
    ...relation.table ? { table: relation.table } : {},
    ...relation.conditions ? { conditions: relation.conditions.map(cloneBuiltCondition) } : {},
    ...relation.hops ? { hops: [...relation.hops] } : {},
    ...relation.gather ? { gather: cloneBuiltGather(relation.gather) } : {},
    ...relation.union ? {
      union: {
        inputs: relation.union.inputs.map(cloneBuiltRelation)
      }
    } : {}
  };
}
function cloneBuiltGather(gather) {
  return {
    ...gather.seed ? { seed: cloneBuiltRelation(gather.seed) } : {},
    max_depth: gather.max_depth,
    step_table: gather.step_table,
    step_current_column: gather.step_current_column,
    step_conditions: gather.step_conditions.map(cloneBuiltCondition),
    step_hops: [...gather.step_hops]
  };
}
var TypedTableQueryBuilder = class _TypedTableQueryBuilder {
  _table;
  _schema;
  _conditions = [];
  _includes = {};
  _requireIncludes = false;
  _selectColumns;
  _orderBys = [];
  _limitVal;
  _offsetVal;
  _hops = [];
  _gatherVal;
  _unionVal;
  constructor(table2, schema2) {
    this._table = table2;
    this._schema = schema2;
  }
  where(conditions) {
    if (this._unionVal) {
      throw new Error("union(...) currently only supports gather(...) in MVP.");
    }
    const clone = this._clone();
    clone._conditions.push(...this._whereConditions(conditions));
    return clone;
  }
  select(...columns) {
    const clone = this._clone();
    clone._selectColumns = [...columns];
    return clone;
  }
  include(relations) {
    const clone = this._clone();
    clone._includes = { ...this._includes, ...relations };
    return clone;
  }
  requireIncludes() {
    const clone = this._clone();
    clone._requireIncludes = true;
    return clone;
  }
  orderBy(column, direction = "asc") {
    const clone = this._clone();
    clone._orderBys.push([column, direction]);
    return clone;
  }
  limit(n) {
    const clone = this._clone();
    clone._limitVal = n;
    return clone;
  }
  offset(n) {
    const clone = this._clone();
    clone._offsetVal = n;
    return clone;
  }
  hopTo(relation) {
    if (this._unionVal) {
      throw new Error("union(...) currently only supports gather(...) in MVP.");
    }
    const clone = this._clone();
    clone._hops.push(relation);
    return clone;
  }
  gather(options) {
    if (typeof options.step !== "function") {
      throw new Error("gather(...) requires step callback.");
    }
    const maxDepth = options.maxDepth ?? 10;
    if (!Number.isInteger(maxDepth) || maxDepth <= 0) {
      throw new Error("gather(...) maxDepth must be a positive integer.");
    }
    if (Object.keys(this._includes).length > 0) {
      throw new Error("gather(...) does not support include(...) in MVP.");
    }
    if (options.start && this._unionVal) {
      throw new Error("gather(...) start does not support union(...) seeds in MVP.");
    }
    const currentToken = "__jazz_gather_current__";
    const stepOutput = options.step({ current: currentToken });
    if (!stepOutput || typeof stepOutput !== "object" || typeof stepOutput._build !== "function") {
      throw new Error("gather(...) step must return a query expression built from app.<table>.");
    }
    const stepBuilt = JSON.parse(stepOutput._build());
    if (typeof stepBuilt.table !== "string" || !stepBuilt.table) {
      throw new Error("gather(...) step query is missing table metadata.");
    }
    if (!Array.isArray(stepBuilt.conditions)) {
      throw new Error("gather(...) step query is missing condition metadata.");
    }
    const stepHops = Array.isArray(stepBuilt.hops) ? stepBuilt.hops.filter((hop) => typeof hop === "string") : [];
    if (stepHops.length !== 1) {
      throw new Error("gather(...) step must include exactly one hopTo(...).");
    }
    const currentConditions = stepBuilt.conditions.filter((condition) => condition.op === "eq" && condition.value === currentToken);
    if (currentConditions.length !== 1) {
      throw new Error("gather(...) step must include exactly one where condition bound to current.");
    }
    const currentCondition = currentConditions[0];
    const stepConditions = stepBuilt.conditions.filter((condition) => !(condition.op === "eq" && condition.value === currentToken));
    const needsExplicitSeed = this._unionVal !== void 0 || this._hops.length > 0 || this._gatherVal !== void 0;
    const seedSource = options.start === void 0 ? this : this.where(options.start);
    const clone = needsExplicitSeed ? this._clone() : seedSource._clone();
    clone._conditions = [];
    clone._hops = [];
    clone._gatherVal = {
      ...needsExplicitSeed ? { seed: seedSource._serializeRelation() } : {},
      max_depth: maxDepth,
      step_table: stepBuilt.table,
      step_current_column: currentCondition.column,
      step_conditions: stepConditions,
      step_hops: stepHops
    };
    clone._unionVal = void 0;
    return clone;
  }
  _build() {
    return JSON.stringify({
      table: this._table,
      conditions: this._conditions,
      includes: this._includes,
      __jazz_requireIncludes: this._requireIncludes || void 0,
      select: this._selectColumns,
      orderBy: this._orderBys,
      limit: this._limitVal,
      offset: this._offsetVal,
      hops: this._hops,
      gather: this._gatherVal,
      ...this._unionVal ? { union: cloneBuiltRelation(this._unionVal).union } : {}
    });
  }
  toJSON() {
    return JSON.parse(this._build());
  }
  _clone() {
    const clone = new _TypedTableQueryBuilder(this._table, this._schema);
    clone._conditions = [...this._conditions];
    clone._includes = { ...this._includes };
    clone._requireIncludes = this._requireIncludes;
    clone._selectColumns = this._selectColumns ? [...this._selectColumns] : void 0;
    clone._orderBys = [...this._orderBys];
    clone._limitVal = this._limitVal;
    clone._offsetVal = this._offsetVal;
    clone._hops = [...this._hops];
    clone._gatherVal = this._gatherVal ? cloneBuiltGather(this._gatherVal) : void 0;
    clone._unionVal = this._unionVal ? cloneBuiltRelation(this._unionVal) : void 0;
    return clone;
  }
  _whereConditions(conditions) {
    const built = [];
    for (const [key, value] of Object.entries(conditions)) {
      if (value === void 0)
        continue;
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        for (const [op, opValue] of Object.entries(value)) {
          if (opValue !== void 0) {
            built.push({ column: key, op, value: opValue });
          }
        }
      } else {
        built.push({ column: key, op: "eq", value });
      }
    }
    return built;
  }
  _serializeRelation() {
    if (this._unionVal) {
      return cloneBuiltRelation(this._unionVal);
    }
    return {
      table: this._table,
      conditions: this._conditions.map(cloneBuiltCondition),
      hops: [...this._hops],
      ...this._gatherVal ? { gather: cloneBuiltGather(this._gatherVal) } : {}
    };
  }
};
function unwrapTableDefinition(definition) {
  if (definition instanceof DefinedTable) {
    return definition.columns;
  }
  if (typeof definition === "object" && definition !== null) {
    const maybeDefinedTable = definition;
    if (maybeDefinedTable.__jazzTableDefinition === true && maybeDefinedTable.columns) {
      return maybeDefinedTable.columns;
    }
  }
  return definition;
}
function definitionToColumns(definition) {
  const columnsDefinition = unwrapTableDefinition(definition);
  const columns = [];
  for (const [columnName, builder] of Object.entries(columnsDefinition)) {
    assertUserColumnNameAllowed(columnName);
    columns.push(builder._build(columnName));
  }
  return columns;
}
function definitionToSchema(definition) {
  return {
    tables: Object.entries(definition).map(([tableName, tableDefinition]) => ({
      name: tableName,
      columns: definitionToColumns(tableDefinition)
    }))
  };
}
function defineSchema(definition) {
  return definition;
}
function defineApp(definition) {
  const normalizedDefinition = definition;
  const schema2 = definitionToSchema(normalizedDefinition);
  const wasmSchema = schemaToWasm(schema2);
  const tables = {};
  for (const tableName of Object.keys(normalizedDefinition)) {
    tables[tableName] = new TypedTableQueryBuilder(tableName, wasmSchema);
  }
  return {
    ...tables,
    union(relations) {
      if (relations.length === 0) {
        throw new Error("union(...) requires at least one relation.");
      }
      const first = relations[0];
      const builder = new TypedTableQueryBuilder(first._table, wasmSchema);
      builder._unionVal = {
        union: {
          inputs: relations.map((relation) => relation._serializeRelation())
        }
      };
      return builder;
    },
    wasmSchema
  };
}
var permissionIntrospectionColumns = [...PERMISSION_INTROSPECTION_COLUMNS];
var provenanceMagicColumns = [...PROVENANCE_MAGIC_COLUMNS];

// node_modules/jazz-tools/dist/migrations.js
function normalizeSchemaDefinition(definition) {
  return Object.fromEntries(Object.entries(definition).map(([tableName, tableDefinition]) => [
    tableName,
    unwrapTableDefinition(tableDefinition)
  ]));
}
function renameTableFrom(oldName) {
  return {
    _type: "renameTable",
    oldName
  };
}
function buildRenameTableMap(renameTables, fromDefinition, toDefinition) {
  const map2 = /* @__PURE__ */ new Map();
  const usedSources = /* @__PURE__ */ new Set();
  if (!renameTables) {
    return map2;
  }
  for (const [tableName, operation] of Object.entries(renameTables)) {
    if (!(tableName in toDefinition)) {
      throw new Error(`Table rename references unknown target table ${tableName}.`);
    }
    if (tableName in fromDefinition) {
      throw new Error(`Table rename target ${tableName} already exists in the source schema; renameTables only supports target-only tables.`);
    }
    if (!(operation.oldName in fromDefinition)) {
      throw new Error(`Table rename references unknown source table ${operation.oldName}.`);
    }
    if (operation.oldName in toDefinition) {
      throw new Error(`Table rename source ${operation.oldName} still exists in the target schema; renameTables only supports source-only tables.`);
    }
    if (usedSources.has(operation.oldName)) {
      throw new Error(`Table rename source ${operation.oldName} is used more than once.`);
    }
    usedSources.add(operation.oldName);
    map2.set(tableName, operation.oldName);
  }
  return map2;
}
function buildAddedTableSet(createTables, fromDefinition, toDefinition, renameTableMap) {
  const set = /* @__PURE__ */ new Set();
  if (!createTables) {
    return set;
  }
  for (const [tableName, marker] of Object.entries(createTables)) {
    if (marker !== true) {
      throw new Error(`createTables.${tableName} must be true.`);
    }
    if (!(tableName in toDefinition)) {
      throw new Error(`createTables references unknown target table ${tableName}.`);
    }
    if (tableName in fromDefinition) {
      throw new Error(`createTables only supports target-only tables; ${tableName} already exists in the source schema.`);
    }
    if (renameTableMap.has(tableName)) {
      throw new Error(`Table ${tableName} cannot be both added and renamed.`);
    }
    set.add(tableName);
  }
  return set;
}
function buildRemovedTableSet(dropTables, fromDefinition, toDefinition, renamedSources) {
  const set = /* @__PURE__ */ new Set();
  if (!dropTables) {
    return set;
  }
  for (const [tableName, marker] of Object.entries(dropTables)) {
    if (marker !== true) {
      throw new Error(`dropTables.${tableName} must be true.`);
    }
    if (!(tableName in fromDefinition)) {
      throw new Error(`dropTables references unknown source table ${tableName}.`);
    }
    if (tableName in toDefinition) {
      throw new Error(`dropTables only supports source-only tables; ${tableName} still exists in the target schema.`);
    }
    if (renamedSources.has(tableName)) {
      throw new Error(`Table ${tableName} cannot be both removed and renamed.`);
    }
    set.add(tableName);
  }
  return set;
}
function columnShapeSignature(builder) {
  const column = builder._build("__migration_shape__");
  return JSON.stringify({
    sqlType: column.sqlType,
    nullable: column.nullable,
    references: column.references ?? null
  });
}
function tableMatchesAfterApplyingColumnOperations(sourceTable, targetTable, tableOps) {
  const transformed = new Map(Object.entries(sourceTable));
  for (const [columnName, operation] of Object.entries(tableOps)) {
    switch (operation._type) {
      case "rename": {
        const builder = transformed.get(operation.oldName);
        if (!builder) {
          return false;
        }
        if (columnName !== operation.oldName && transformed.has(columnName)) {
          return false;
        }
        transformed.delete(operation.oldName);
        transformed.set(columnName, builder);
        break;
      }
      case "add": {
        const builder = targetTable[columnName];
        if (!builder || transformed.has(columnName)) {
          return false;
        }
        transformed.set(columnName, builder);
        break;
      }
      case "drop": {
        if (!transformed.delete(columnName)) {
          return false;
        }
        break;
      }
    }
  }
  const targetEntries = Object.entries(targetTable);
  if (transformed.size !== targetEntries.length) {
    return false;
  }
  for (const [columnName, targetBuilder] of targetEntries) {
    const sourceBuilder = transformed.get(columnName);
    if (!sourceBuilder) {
      return false;
    }
    if (columnShapeSignature(sourceBuilder) !== columnShapeSignature(targetBuilder)) {
      return false;
    }
  }
  return true;
}
function buildForwardLenses(migrate2, renameTables, createTables, dropTables, fromDefinition, toDefinition) {
  const renameTableMap = buildRenameTableMap(renameTables, fromDefinition, toDefinition);
  const renamedSources = new Set(renameTableMap.values());
  const addedTableSet = buildAddedTableSet(createTables, fromDefinition, toDefinition, renameTableMap);
  const removedTableSet = buildRemovedTableSet(dropTables, fromDefinition, toDefinition, renamedSources);
  if (!migrate2 && renameTableMap.size === 0 && addedTableSet.size === 0 && removedTableSet.size === 0) {
    return [];
  }
  const forward = [];
  const orderedTableNames = [
    .../* @__PURE__ */ new Set([
      ...Object.keys(createTables ?? {}),
      ...Object.keys(dropTables ?? {}),
      ...Object.keys(renameTables ?? {}),
      ...Object.keys(migrate2 ?? {})
    ])
  ];
  const sourceTables = fromDefinition;
  const targetTables = toDefinition;
  for (const tableName of orderedTableNames) {
    const added = addedTableSet.has(tableName) ? true : void 0;
    const removed = removedTableSet.has(tableName) ? true : void 0;
    const renamedFrom = renameTableMap.get(tableName);
    const rawTableOps = migrate2?.[tableName];
    const tableOps = rawTableOps && typeof rawTableOps === "object" ? rawTableOps : {};
    const operationEntries = Object.entries(tableOps);
    if (added && removed) {
      throw new Error(`Table ${tableName} cannot be both added and removed.`);
    }
    if ((added || removed) && renamedFrom) {
      throw new Error(`Table ${tableName} cannot be combined with both table markers and renameTables.`);
    }
    if ((added || removed) && operationEntries.length > 0) {
      throw new Error(`Table ${tableName} cannot have column operations when declared in createTables or dropTables.`);
    }
    const operations = [];
    const renamedSources2 = /* @__PURE__ */ new Set();
    const droppedColumns = /* @__PURE__ */ new Set();
    const sourceTableName = renamedFrom ?? tableName;
    for (const [columnName, operation] of operationEntries) {
      switch (operation._type) {
        case "rename": {
          assertUserColumnNameAllowed(columnName);
          if (renamedSources2.has(operation.oldName)) {
            throw new Error(`Migration for ${tableName} renames ${operation.oldName} more than once.`);
          }
          if (droppedColumns.has(operation.oldName)) {
            throw new Error(`Migration for ${tableName} cannot both drop and rename ${operation.oldName}.`);
          }
          renamedSources2.add(operation.oldName);
          operations.push({
            type: "rename",
            column: operation.oldName,
            value: columnName
          });
          break;
        }
        case "add": {
          assertUserColumnNameAllowed(columnName);
          const builder = targetTables[tableName]?.[columnName];
          if (!builder) {
            throw new Error(`Migration references unknown target column ${tableName}.${columnName}.`);
          }
          operations.push({
            type: "introduce",
            column: columnName,
            sqlType: builder._sqlType,
            value: operation.default
          });
          break;
        }
        case "drop": {
          if (renamedSources2.has(columnName)) {
            throw new Error(`Migration for ${tableName} cannot both drop and rename ${columnName}.`);
          }
          droppedColumns.add(columnName);
          const builder = sourceTables[sourceTableName]?.[columnName];
          if (!builder) {
            throw new Error(`Migration references unknown source column ${sourceTableName}.${columnName}.`);
          }
          operations.push({
            type: "drop",
            column: columnName,
            sqlType: builder._sqlType,
            value: operation.backwardsDefault
          });
          break;
        }
      }
    }
    if (renamedFrom) {
      const sourceTable = sourceTables[sourceTableName];
      const targetTable = targetTables[tableName];
      if (!sourceTable || !targetTable) {
        throw new Error(`Table rename ${sourceTableName} -> ${tableName} references a missing source or target table.`);
      }
      if (!tableMatchesAfterApplyingColumnOperations(sourceTable, targetTable, tableOps)) {
        throw new Error(`Table rename ${sourceTableName} -> ${tableName} does not match the target table after applying its column migrations.`);
      }
    }
    if (added || removed || renamedFrom || operations.length > 0) {
      forward.push({
        table: tableName,
        added,
        removed,
        renamedFrom,
        operations
      });
    }
  }
  return forward;
}
function defineMigration(config) {
  const fromDefinition = normalizeSchemaDefinition(config.from);
  const toDefinition = normalizeSchemaDefinition(config.to);
  return {
    fromHash: config.fromHash,
    toHash: config.toHash,
    from: config.from,
    to: config.to,
    forward: buildForwardLenses(config.migrate, config.renameTables, config.createTables, config.dropTables, fromDefinition, toDefinition)
  };
}

// node_modules/pluralize-esm/dist/index.js
var pluralRules = [];
var singularRules = [];
var uncountables = /* @__PURE__ */ new Set();
var irregularPlurals = /* @__PURE__ */ new Map();
var irregularSingles = /* @__PURE__ */ new Map();
var sanitizeRule = (rule) => typeof rule === "string" ? new RegExp("^".concat(rule, "$"), "i") : rule;
var restoreCase = (word, token) => {
  if (typeof token !== "string") return word;
  if (word === token) return token;
  if (word === word.toLowerCase()) return token.toLowerCase();
  if (word === word.toUpperCase()) return token.toUpperCase();
  if (word[0] === word[0].toUpperCase()) {
    return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
  }
  return token.toLowerCase();
};
var sanitizeWord = (token, word, rules) => {
  if (!token.length || uncountables.has(token)) {
    return word;
  }
  let {
    length: len
  } = rules;
  while (len--) {
    const rule = rules[len];
    if (rule[0].test(word)) {
      return word.replace(rule[0], function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        const [match, index] = args;
        const result = rule[1].replace(/\$(\d{1,2})/g, (_, index2) => args[index2] || "");
        if (match === "") {
          return restoreCase(word[index - 1], result);
        }
        return restoreCase(match, result);
      });
    }
  }
  return word;
};
var compute = (word, replaceMap, keepMap, rules) => {
  const token = word.toLowerCase();
  if (keepMap.has(token)) {
    return restoreCase(word, token);
  }
  if (replaceMap.has(token)) {
    return restoreCase(word, replaceMap.get(token));
  }
  return sanitizeWord(token, word, rules);
};
var mapHas = (word, replaceMap, keepMap, rules) => {
  const token = word.toLowerCase();
  if (keepMap.has(token)) return true;
  if (replaceMap.has(token)) return false;
  return sanitizeWord(token, token, rules) === token;
};
var pluralize = (word, count, inclusive) => {
  const pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
  if (inclusive) return "".concat(count, " ").concat(pluralized);
  return pluralized;
};
pluralize.plural = (word) => compute(word, irregularSingles, irregularPlurals, pluralRules);
pluralize.singular = (word) => compute(word, irregularPlurals, irregularSingles, singularRules);
pluralize.addPluralRule = (rule, replacement) => {
  pluralRules.push([sanitizeRule(rule), replacement]);
};
pluralize.addSingularRule = (rule, replacement) => {
  singularRules.push([sanitizeRule(rule), replacement]);
};
pluralize.addIrregularRule = (single, plural) => {
  const _plural = plural.toLowerCase();
  const _single = single.toLowerCase();
  irregularSingles.set(_single, _plural);
  irregularPlurals.set(_plural, _single);
};
pluralize.addUncountableRule = (rule) => {
  if (typeof rule === "string") {
    uncountables.add(rule.toLowerCase());
    return;
  }
  pluralize.addPluralRule(rule, "$0");
  pluralize.addSingularRule(rule, "$0");
};
pluralize.isPlural = (word) => mapHas(word, irregularSingles, irregularPlurals, pluralRules);
pluralize.isSingular = (word) => mapHas(word, irregularPlurals, irregularSingles, singularRules);
var defaultIrregulars = [
  // Pronouns.
  ["I", "we"],
  ["me", "us"],
  ["he", "they"],
  ["she", "they"],
  ["them", "them"],
  ["myself", "ourselves"],
  ["yourself", "yourselves"],
  ["itself", "themselves"],
  ["herself", "themselves"],
  ["himself", "themselves"],
  ["themself", "themselves"],
  ["is", "are"],
  ["was", "were"],
  ["has", "have"],
  ["this", "these"],
  ["that", "those"],
  ["my", "our"],
  ["its", "their"],
  ["his", "their"],
  ["her", "their"],
  // Words ending in with a consonant and `o`.
  ["echo", "echoes"],
  ["dingo", "dingoes"],
  ["volcano", "volcanoes"],
  ["tornado", "tornadoes"],
  ["torpedo", "torpedoes"],
  // Ends with `us`.
  ["genus", "genera"],
  ["viscus", "viscera"],
  // Ends with `ma`.
  ["stigma", "stigmata"],
  ["stoma", "stomata"],
  ["dogma", "dogmata"],
  ["lemma", "lemmata"],
  ["schema", "schemata"],
  ["anathema", "anathemata"],
  // Other irregular rules.
  ["ox", "oxen"],
  ["axe", "axes"],
  ["die", "dice"],
  ["yes", "yeses"],
  ["foot", "feet"],
  ["eave", "eaves"],
  ["goose", "geese"],
  ["tooth", "teeth"],
  ["quiz", "quizzes"],
  ["human", "humans"],
  ["proof", "proofs"],
  ["carve", "carves"],
  ["valve", "valves"],
  ["looey", "looies"],
  ["thief", "thieves"],
  ["groove", "grooves"],
  ["pickaxe", "pickaxes"],
  ["passerby", "passersby"],
  ["canvas", "canvases"]
];
var defaultPlurals = [[/s?$/i, "s"], [/[^\u0000-\u007F]$/i, "$0"], [/([^aeiou]ese)$/i, "$1"], [/(ax|test)is$/i, "$1es"], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"], [/(e[mn]u)s?$/i, "$1s"], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"], [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"], [/(seraph|cherub)(?:im)?$/i, "$1im"], [/(her|at|gr)o$/i, "$1oes"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"], [/sis$/i, "ses"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"], [/([^aeiouy]|qu)y$/i, "$1ies"], [/([^ch][ieo][ln])ey$/i, "$1ies"], [/(x|ch|ss|sh|zz)$/i, "$1es"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"], [/(pe)(?:rson|ople)$/i, "$1ople"], [/(child)(?:ren)?$/i, "$1ren"], [/eaux$/i, "$0"], [/m[ae]n$/i, "men"], ["thou", "you"]];
var defaultSingles = [[/s$/i, ""], [/(ss)$/i, "$1"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"], [/ies$/i, "y"], [/(dg|ss|ois|lk|ok|wn|mb|th|ch|ec|oal|is|ck|ix|sser|ts|wb)ies$/i, "$1ie"], [/\b(l|(?:neck|cross|hog|aun)?t|coll|faer|food|gen|goon|group|hipp|junk|vegg|(?:pork)?p|charl|calor|cut)ies$/i, "$1ie"], [/\b(mon|smil)ies$/i, "$1ey"], [/\b((?:tit)?m|l)ice$/i, "$1ouse"], [/(seraph|cherub)im$/i, "$1"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"], [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"], [/(test)(?:is|es)$/i, "$1is"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"], [/(alumn|alg|vertebr)ae$/i, "$1a"], [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"], [/(matr|append)ices$/i, "$1ix"], [/(pe)(rson|ople)$/i, "$1rson"], [/(child)ren$/i, "$1"], [/(eau)x?$/i, "$1"], [/men$/i, "man"]];
var defaultUncountables = [
  // Singular words with no plurals.
  "adulthood",
  "advice",
  "agenda",
  "aid",
  "aircraft",
  "alcohol",
  "ammo",
  "analytics",
  "anime",
  "athletics",
  "audio",
  "bison",
  "blood",
  "bream",
  "buffalo",
  "butter",
  "carp",
  "cash",
  "chassis",
  "chess",
  "clothing",
  "cod",
  "commerce",
  "cooperation",
  "corps",
  "debris",
  "diabetes",
  "digestion",
  "elk",
  "energy",
  "equipment",
  "excretion",
  "expertise",
  "firmware",
  "flounder",
  "fun",
  "gallows",
  "garbage",
  "graffiti",
  "hardware",
  "headquarters",
  "health",
  "herpes",
  "highjinks",
  "homework",
  "housework",
  "information",
  "jeans",
  "justice",
  "kudos",
  "labour",
  "literature",
  "machinery",
  "mackerel",
  "mail",
  "media",
  "mews",
  "moose",
  "music",
  "mud",
  "manga",
  "news",
  "only",
  "personnel",
  "pike",
  "plankton",
  "pliers",
  "police",
  "pollution",
  "premises",
  "rain",
  "research",
  "rice",
  "salmon",
  "scissors",
  "series",
  "sewage",
  "shambles",
  "shrimp",
  "software",
  "staff",
  "swine",
  "tennis",
  "traffic",
  "transportation",
  "trout",
  "tuna",
  "wealth",
  "welfare",
  "whiting",
  "wildebeest",
  "wildlife",
  "you",
  /pok[eé]mon$/i,
  // Regexes.
  /[^aeiou]ese$/i,
  // "chinese", "japanese"
  /deer$/i,
  // "deer", "reindeer"
  /fish$/i,
  // "fish", "blowfish", "angelfish"
  /measles$/i,
  /o[iu]s$/i,
  // "carnivorous"
  /pox$/i,
  // "chickpox", "smallpox"
  /sheep$/i
];
for (const [single, plural] of defaultIrregulars) {
  pluralize.addIrregularRule(single, plural);
}
for (const [search, replacement] of defaultPlurals) {
  pluralize.addPluralRule(search, replacement);
}
for (const [search, replacement] of defaultSingles) {
  pluralize.addSingularRule(search, replacement);
}
for (const search of defaultUncountables) {
  pluralize.addUncountableRule(search);
}

// node_modules/jazz-tools/dist/codegen/relation-analyzer.js
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function forwardRefNameFromFK(columnName) {
  const withoutIdSuffix = columnName.replace(/(?:_ids|Ids|_id|Id)$/, "");
  const requiresPluralization = columnName.endsWith("s");
  return requiresPluralization ? pluralize.plural(withoutIdSuffix) : withoutIdSuffix;
}
function analyzeRelations(schema2) {
  const relations = /* @__PURE__ */ new Map();
  for (const tableName of Object.keys(schema2)) {
    relations.set(tableName, []);
  }
  for (const [tableName, table2] of Object.entries(schema2)) {
    for (const col2 of table2.columns) {
      if (col2.references) {
        const isUuidRef = col2.column_type.type === "Uuid" || col2.column_type.type === "Array" && col2.column_type.element.type === "Uuid";
        if (!isUuidRef) {
          throw new Error(`Column "${tableName}.${col2.name}" uses references but is not UUID or UUID[]`);
        }
        const isForwardArray = col2.column_type.type === "Array" && col2.column_type.element.type === "Uuid";
        const forwardName = forwardRefNameFromFK(col2.name);
        const forwardRelation = {
          name: forwardName,
          type: "forward",
          fromTable: tableName,
          toTable: col2.references,
          fromColumn: col2.name,
          toColumn: "id",
          isArray: isForwardArray,
          nullable: col2.nullable
        };
        relations.get(tableName).push(forwardRelation);
        if (!relations.has(col2.references)) {
          throw new Error(`Table "${tableName}" references unknown table "${col2.references}" via column "${col2.name}"`);
        }
        const reverseName = `${tableName}Via${capitalize(forwardName)}`;
        const reverseRelation = {
          name: reverseName,
          type: "reverse",
          fromTable: col2.references,
          toTable: tableName,
          fromColumn: "id",
          toColumn: col2.name,
          isArray: true,
          nullable: false
          // Arrays are not nullable, just empty
        };
        relations.get(col2.references).push(reverseRelation);
      }
    }
  }
  return relations;
}

// node_modules/jazz-tools/dist/permissions/index.js
var OUTER_ROW_SESSION_PREFIX = "__jazz_outer_row";
var RECURSIVE_POLICY_MAX_DEPTH_DEFAULT = 10;
var RECURSIVE_POLICY_MAX_DEPTH_HARD_CAP = 64;
var CREATOR_CONDITION = {
  type: "Cmp",
  column: "$createdBy",
  op: "Eq",
  value: {
    type: "SessionRef",
    path: ["user_id"]
  }
};
function relationJoinAlias(kind, join3, index) {
  if (kind === "recursive") {
    return `__recursive_join_${index}`;
  }
  return join3.viaHop ? `__hop_${index}` : `__join_${index}`;
}
var PermissionRelationBuilder = class _PermissionRelationBuilder {
  state;
  relations;
  constructor(state, relations) {
    this.state = state;
    this.relations = relations;
  }
  where(input) {
    if (this.state.kind === "union") {
      throw new Error("where(...) does not support union(...) relations in MVP.");
    }
    const where = resolveRelationWhereInput(input);
    const filters = [...this.state.filters, ...extractRelationFilters(where, this.state)];
    return new _PermissionRelationBuilder({
      ...this.state,
      filters
    }, this.relations);
  }
  join(target, on) {
    if (this.state.kind === "union") {
      throw new Error("join(...) does not support union(...) relations in MVP.");
    }
    const table2 = relationJoinTargetToTable(target);
    const joins = [
      ...this.state.joins,
      {
        table: table2,
        left: on.left,
        right: on.right
      }
    ];
    return new _PermissionRelationBuilder({
      ...this.state,
      joins
    }, this.relations);
  }
  select(columns) {
    if (this.state.kind === "union") {
      throw new Error("select(...) does not support union(...) relations in MVP.");
    }
    return new _PermissionRelationBuilder({
      ...this.state,
      selectMap: normalizeRelationSelectMap(columns)
    }, this.relations);
  }
  hopTo(relation) {
    if (this.state.kind === "union") {
      throw new Error("hopTo(...) does not support union(...) relations in MVP.");
    }
    const relationName = relation.trim();
    if (!relationName) {
      throw new Error("hopTo(...) requires a non-empty relation name.");
    }
    if (this.state.kind === "table") {
      if (this.state.joins.length > 0) {
        throw new Error("hopTo(...) currently supports a single hop per relation in MVP.");
      }
      if (this.state.selectMap && Object.keys(this.state.selectMap).length > 0) {
        throw new Error("hopTo(...) cannot be composed after select(...).");
      }
      const rel2 = resolveNamedRelation(this.relations, this.state.outputTable, relationName);
      const join3 = rel2.type === "forward" ? {
        table: rel2.toTable,
        left: rel2.fromColumn,
        right: "id",
        viaHop: true
      } : {
        table: rel2.toTable,
        left: "id",
        right: rel2.toColumn,
        viaHop: true
      };
      return new _PermissionRelationBuilder({
        ...this.state,
        outputTable: rel2.toTable,
        joins: [...this.state.joins, join3]
      }, this.relations);
    }
    if (this.state.joins.length > 0) {
      throw new Error("hopTo(...) currently supports a single hop per relation in MVP.");
    }
    const rel = resolveNamedRelation(this.relations, this.state.outputTable, relationName);
    if (rel.type !== "reverse") {
      throw new Error(`Recursive hopTo("${relationName}") currently requires a reverse relation from "${this.state.outputTable}".`);
    }
    return new _PermissionRelationBuilder({
      ...this.state,
      outputTable: rel.toTable,
      joins: [
        ...this.state.joins,
        {
          table: rel.toTable,
          left: "id",
          right: rel.toColumn,
          viaHop: true
        }
      ]
    }, this.relations);
  }
  gather(options) {
    if (typeof options.step !== "function") {
      throw new Error("gather(...) requires a step callback.");
    }
    if (this.state.selectMap && Object.keys(this.state.selectMap).length > 0) {
      throw new Error("gather(...) does not support select(...) seeds in MVP.");
    }
    if (options.start && this.state.kind === "union") {
      throw new Error("gather(...) start does not support union(...) seeds in MVP.");
    }
    const seedState = buildGatherSeedState(this.state, options.start, this.relations);
    const currentToken = {
      __jazzPermissionKind: "recursive-current"
    };
    const stepState = getRelationState(options.step({ current: currentToken }));
    if (stepState.kind !== "table") {
      throw new Error("gather(...) step must return a relation built from policy.<table>.");
    }
    if (stepState.joins.length !== 1 || !stepState.joins[0]?.viaHop) {
      throw new Error("gather(...) step must include exactly one hopTo(...).");
    }
    if (stepState.selectMap && Object.keys(stepState.selectMap).length > 0) {
      throw new Error("gather(...) step does not support select(...).");
    }
    const currentFilters = stepState.filters.filter((filter) => isRecursiveCurrentFilter(filter.raw, currentToken));
    if (currentFilters.length !== 1) {
      throw new Error("gather(...) step must include exactly one where condition bound to current.");
    }
    const currentFilter = currentFilters[0];
    if (!currentFilter) {
      throw new Error("gather(...) step must include exactly one where condition bound to current.");
    }
    const stepFilters = stepState.filters.filter((filter) => filter !== currentFilter);
    const stepJoin = stepState.joins[0];
    if (stepJoin.table !== this.state.outputTable || stripQualifier(stepJoin.right) !== "id") {
      throw new Error(`gather(...) step must hop back to "${this.state.outputTable}" rows via hopTo(...).`);
    }
    const seed = relationStateToRelExpr(seedState);
    const stepPredicates = [
      ...stepFilters.flatMap((filter) => relationFilterToPredicates(filter)),
      {
        Cmp: {
          left: {
            scope: stepState.outputTable,
            column: stripQualifier(currentFilter.column)
          },
          op: "Eq",
          right: {
            RowId: "Frontier"
          }
        }
      }
    ];
    const stepFiltered = applyRelFilter(stepState.base, stepPredicates);
    const recursiveHopScope = "__recursive_hop_0";
    const stepProjected = {
      Project: {
        input: {
          Join: {
            left: stepFiltered,
            right: {
              TableScan: {
                table: this.state.outputTable
              }
            },
            on: [
              {
                left: {
                  scope: stepState.outputTable,
                  column: stripQualifier(stepJoin.left)
                },
                right: { scope: recursiveHopScope, column: "id" }
              }
            ],
            join_kind: "Inner"
          }
        },
        columns: projectHopResult(recursiveHopScope)
      }
    };
    const maxDepth = normalizeRecursiveRelationDepth(options.maxDepth);
    return new _PermissionRelationBuilder({
      kind: "recursive",
      outputTable: this.state.outputTable,
      base: {
        Gather: {
          seed,
          step: stepProjected,
          frontier_key: { RowId: "Current" },
          max_depth: maxDepth,
          dedupe_key: [{ RowId: "Current" }]
        }
      },
      initialScope: this.state.outputTable,
      filters: [],
      joins: [],
      selectMap: void 0
    }, this.relations);
  }
  toState() {
    return this.state;
  }
};
var UpdateRuleBuilder = class {
  table;
  registerRule;
  oldCondition;
  newCondition;
  isRegistered = false;
  constructor(table2, registerRule) {
    this.table = table2;
    this.registerRule = registerRule;
  }
  where(input) {
    const condition = resolveWhereInput(input);
    const rule = {
      table: this.table,
      action: "update",
      using: condition,
      withCheck: condition
    };
    this.registerRule?.(rule);
    return rule;
  }
  never() {
    return this.where(neverCondition());
  }
  always() {
    return this.where(alwaysCondition());
  }
  whereOld(input) {
    this.oldCondition = resolveWhereInput(input);
    this.registerBuilder();
    return this;
  }
  whereNew(input) {
    this.newCondition = resolveWhereInput(input);
    this.registerBuilder();
    return this;
  }
  registerBuilder() {
    if (this.isRegistered) {
      return;
    }
    this.isRegistered = true;
    this.registerRule?.(this);
  }
  toRule() {
    if (!this.oldCondition && !this.newCondition) {
      throw new Error(`Missing update policy conditions for table "${this.table}"`);
    }
    return {
      table: this.table,
      action: "update",
      using: this.oldCondition ?? this.newCondition,
      withCheck: this.newCondition ?? this.oldCondition
    };
  }
};
function definePermissions(app, factory) {
  const fkReferencesByTable = collectFkReferencesByTable(app);
  const relationsByTable = collectRelationsByTable(app);
  const tableNames = Object.keys(app).filter((key) => key !== "wasmSchema");
  const rules = [];
  const seenRules = /* @__PURE__ */ new Set();
  const collectRule = (ruleLike) => {
    if (seenRules.has(ruleLike)) {
      return;
    }
    seenRules.add(ruleLike);
    rules.push(ruleLike);
  };
  const ctx = {
    policy: buildPolicyContext(tableNames, relationsByTable, collectRule),
    anyOf,
    allOf,
    isCreator: CREATOR_CONDITION,
    allowedTo: createAllowedToContext(),
    session: createSessionContext()
  };
  factory(ctx);
  return compileRules(rules, fkReferencesByTable, relationsByTable);
}
function collectFkReferencesByTable(app) {
  const result = /* @__PURE__ */ new Map();
  const schema2 = app.wasmSchema;
  if (!schema2 || typeof schema2 !== "object") {
    return result;
  }
  const typedSchema = schema2;
  for (const [tableName, table2] of Object.entries(typedSchema)) {
    if (!table2 || typeof table2 !== "object" || !Array.isArray(table2.columns)) {
      continue;
    }
    const fkColumns = /* @__PURE__ */ new Map();
    for (const column of table2.columns) {
      if (column.references) {
        fkColumns.set(column.name, column.references);
      }
    }
    result.set(tableName, fkColumns);
  }
  return result;
}
function collectRelationsByTable(app) {
  const schema2 = app.wasmSchema;
  if (!schema2 || typeof schema2 !== "object") {
    return /* @__PURE__ */ new Map();
  }
  const typedSchema = schema2;
  try {
    return analyzeRelations(typedSchema);
  } catch {
    return /* @__PURE__ */ new Map();
  }
}
function buildPolicyContext(tableNames, relationsByTable, collectRule) {
  const context = {};
  for (const table2 of tableNames) {
    context[table2] = buildTablePolicyBuilder(table2, relationsByTable, collectRule);
  }
  context.exists = (relation) => ({
    __jazzPermissionKind: "exists-relation",
    relation
  });
  context.union = (relations) => createUnionRelation(relations, relationsByTable);
  return context;
}
function buildTablePolicyBuilder(table2, relationsByTable, collectRule) {
  const registerRule = (rule) => {
    collectRule(rule);
    return rule;
  };
  const read = {
    where: (input) => registerRule({ table: table2, action: "read", using: resolveWhereInput(input) }),
    always: () => read.where(alwaysCondition()),
    never: () => read.where(neverCondition())
  };
  const insert = {
    where: (input) => registerRule({ table: table2, action: "insert", withCheck: resolveWhereInput(input) }),
    always: () => insert.where(alwaysCondition()),
    never: () => insert.where(neverCondition())
  };
  const del = {
    where: (input) => registerRule({ table: table2, action: "delete", using: resolveWhereInput(input) }),
    always: () => del.where(alwaysCondition()),
    never: () => del.where(neverCondition())
  };
  const updateFactory = () => new UpdateRuleBuilder(table2, collectRule);
  const managedByCreator = () => {
    read.where(CREATOR_CONDITION);
    insert.where(CREATOR_CONDITION);
    updateFactory().where(CREATOR_CONDITION);
    del.where(CREATOR_CONDITION);
  };
  const exists = {
    where: (input) => ({
      __jazzPermissionKind: "exists",
      table: table2,
      where: normalizeWhereObject(input)
    })
  };
  return {
    __jazzPermissionKind: "table-builder",
    __jazzPermissionTable: table2,
    allowRead: read,
    allowReads: read,
    allowInsert: insert,
    allowInserts: insert,
    allowDelete: del,
    allowDeletes: del,
    get allowUpdate() {
      return updateFactory();
    },
    get allowUpdates() {
      return updateFactory();
    },
    managedByCreator,
    exists,
    where(input) {
      return createTableRelation(table2, relationsByTable).where(input);
    },
    select(columns) {
      return createTableRelation(table2, relationsByTable).select(columns);
    },
    hopTo(relation) {
      return createTableRelation(table2, relationsByTable).hopTo(relation);
    },
    gather(options) {
      return createTableRelation(table2, relationsByTable).gather(options);
    }
  };
}
function createTableRelation(table2, relationsByTable) {
  return new PermissionRelationBuilder({
    kind: "table",
    outputTable: table2,
    base: {
      TableScan: {
        table: table2
      }
    },
    initialScope: table2,
    filters: [],
    joins: [],
    selectMap: void 0
  }, relationsByTable);
}
function createUnionRelation(relations, relationsByTable) {
  if (relations.length === 0) {
    throw new Error("union(...) requires at least one relation.");
  }
  const states = relations.map((relation) => getRelationState(relation));
  const firstState = states[0];
  if (!firstState) {
    throw new Error("union(...) requires at least one relation.");
  }
  if (states.some((state) => state.outputTable !== firstState.outputTable)) {
    throw new Error("union(...) requires all relations to output the same table.");
  }
  if (states.some((state) => state.selectMap && Object.keys(state.selectMap).length > 0)) {
    throw new Error("union(...) does not support select(...) relations in MVP.");
  }
  return new PermissionRelationBuilder({
    kind: "union",
    outputTable: firstState.outputTable,
    base: {
      Union: {
        inputs: states.map((state) => relationStateToRelExpr(state))
      }
    },
    initialScope: "",
    filters: [],
    joins: [],
    selectMap: void 0
  }, relationsByTable);
}
function buildGatherSeedState(state, start, relationsByTable) {
  if (start === void 0) {
    return state;
  }
  const startWhere = resolveRelationWhereInput(start);
  const baseScope = currentRelationScope(state);
  const joins = [...state.joins];
  const filters = [...state.filters];
  const qualifiedRelationByPrefix = /* @__PURE__ */ new Map();
  const qualifiedScopeByPrefix = /* @__PURE__ */ new Map();
  for (const [column, raw] of Object.entries(startWhere)) {
    if (raw === void 0) {
      continue;
    }
    const [prefix, bare] = splitQualifiedColumn(column);
    if (!prefix || prefix === state.outputTable) {
      filters.push({ column: bare, raw, scope: baseScope });
      continue;
    }
    const relation = resolveQualifiedGatherStartRelation(relationsByTable, state.outputTable, prefix, bare);
    const existingRelation = qualifiedRelationByPrefix.get(prefix);
    if (existingRelation && existingRelation.name !== relation.name) {
      throw new Error(`gather(...) qualified start table "${prefix}" is ambiguous from "${state.outputTable}"; use an explicit relation seed instead.`);
    }
    qualifiedRelationByPrefix.set(prefix, relation);
    let scope = qualifiedScopeByPrefix.get(prefix);
    if (!scope) {
      const join3 = relationToJoinSpec(relation);
      joins.push(join3);
      scope = relationJoinAlias(state.kind, join3, joins.length - 1);
      qualifiedScopeByPrefix.set(prefix, scope);
    }
    filters.push({ column: bare, raw, scope });
  }
  return {
    ...state,
    joins,
    filters
  };
}
function resolveQualifiedGatherStartRelation(relationsByTable, outputTable, qualifiedTable, column) {
  const candidates = (relationsByTable.get(outputTable) ?? []).filter((relation) => relation.toTable === qualifiedTable);
  if (candidates.length === 0) {
    throw new Error(`gather(...) qualified start column "${qualifiedTable}.${column}" does not match a direct relation from "${outputTable}".`);
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  const disambiguated = candidates.filter((relation) => relation.type === "forward" ? relation.fromColumn === column : relation.toColumn === column);
  if (disambiguated.length === 1) {
    return disambiguated[0];
  }
  throw new Error(`gather(...) qualified start table "${qualifiedTable}" is ambiguous from "${outputTable}"; use an explicit relation seed instead.`);
}
function resolveQualifiedRuleRelation(relationsByTable, outputTable, qualifiedTable, column) {
  const candidates = (relationsByTable.get(outputTable) ?? []).filter((relation) => relation.toTable === qualifiedTable);
  if (candidates.length === 0) {
    throw new Error(`Qualified where(...) column "${qualifiedTable}.${column}" does not match a direct relation from "${outputTable}".`);
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  const disambiguated = candidates.filter((relation) => relation.type === "forward" ? relation.fromColumn === column : relation.toColumn === column);
  if (disambiguated.length === 1) {
    return disambiguated[0];
  }
  throw new Error(`Qualified where(...) table "${qualifiedTable}" is ambiguous from "${outputTable}"; use an explicit relation instead.`);
}
function relationToJoinSpec(relation) {
  if (relation.type === "forward") {
    return {
      table: relation.toTable,
      left: relation.fromColumn,
      right: "id"
    };
  }
  return {
    table: relation.toTable,
    left: "id",
    right: relation.toColumn
  };
}
function relationJoinTargetToTable(target) {
  if (typeof target === "string") {
    return target;
  }
  if (isPlainObject(target) && target.__jazzPermissionKind === "table-builder" && typeof target.__jazzPermissionTable === "string") {
    return target.__jazzPermissionTable;
  }
  throw new Error("join(...) expects a table builder (policy.<table>) or table name string.");
}
function resolveNamedRelation(relationsByTable, table2, relationName) {
  const relations = relationsByTable.get(table2) ?? [];
  const relation = relations.find((candidate) => candidate.name === relationName);
  if (!relation) {
    throw new Error(`Unknown relation "${relationName}" on table "${table2}".`);
  }
  return relation;
}
function isRecursiveCurrentFilter(raw, token) {
  if (raw === token) {
    return true;
  }
  if (!isPlainObject(raw)) {
    return false;
  }
  const keys = Object.keys(raw).filter((key) => raw[key] !== void 0);
  return keys.length === 1 && keys[0] === "eq" && raw.eq === token;
}
function resolveRelationWhereInput(input) {
  if (typeof input === "function") {
    return resolveRelationWhereInput(input(createRowContext()));
  }
  return normalizeWhereObject(input);
}
function currentRelationScope(state) {
  if (state.joins.length === 0) {
    return state.initialScope;
  }
  const joinIndex = state.joins.length - 1;
  const join3 = state.joins[joinIndex];
  return relationJoinAlias(state.kind, join3, joinIndex);
}
function extractRelationFilters(where, state) {
  const filters = [];
  const defaultScope = currentRelationScope(state);
  for (const [column, raw] of Object.entries(where)) {
    if (raw === void 0) {
      continue;
    }
    const [prefix, bare] = splitQualifiedColumn(column);
    filters.push({
      column: bare,
      raw,
      scope: prefix ? resolveQualifiedRelationFilterScope(state, prefix, bare) : defaultScope
    });
  }
  return filters;
}
function relationBaseScopeBinding(state) {
  if (!state.initialScope) {
    return null;
  }
  return {
    table: state.initialScope,
    scope: state.initialScope
  };
}
function resolveQualifiedRelationFilterScope(state, qualifiedTable, column) {
  const scopes = /* @__PURE__ */ new Set();
  const baseBinding = relationBaseScopeBinding(state);
  if (baseBinding && baseBinding.table === qualifiedTable) {
    scopes.add(baseBinding.scope);
  }
  state.joins.forEach((join3, index) => {
    if (join3.table === qualifiedTable) {
      scopes.add(relationJoinAlias(state.kind, join3, index));
    }
  });
  if (scopes.size === 0) {
    throw new Error(`Qualified relation where(...) column "${qualifiedTable}.${column}" does not match the current relation scopes.`);
  }
  if (scopes.size > 1) {
    throw new Error(`Qualified relation where(...) table "${qualifiedTable}" is ambiguous in the current relation; use an unambiguous relation shape instead.`);
  }
  return scopes.values().next().value;
}
function normalizeRelationSelectMap(columns) {
  if (!isPlainObject(columns)) {
    throw new Error("select(...) expects an object map: { alias: column }.");
  }
  const entries = Object.entries(columns);
  if (entries.length === 0) {
    throw new Error("select(...) requires at least one projected column.");
  }
  const selectMap = {};
  for (const [alias, column] of entries) {
    const normalizedAlias = alias.trim();
    if (!normalizedAlias) {
      throw new Error("select(...) alias names must be non-empty strings.");
    }
    if (typeof column !== "string" || !column.trim()) {
      throw new Error(`select(...) column for alias "${alias}" must be a non-empty string.`);
    }
    selectMap[normalizedAlias] = stripQualifier(column);
  }
  return selectMap;
}
function normalizeRecursiveRelationDepth(maxDepth) {
  if (maxDepth === void 0) {
    return RECURSIVE_POLICY_MAX_DEPTH_DEFAULT;
  }
  if (!Number.isInteger(maxDepth) || maxDepth <= 0) {
    throw new Error("gather(...) maxDepth must be a positive integer.");
  }
  if (maxDepth > RECURSIVE_POLICY_MAX_DEPTH_HARD_CAP) {
    throw new Error(`gather(...) maxDepth ${maxDepth} exceeds hard cap ${RECURSIVE_POLICY_MAX_DEPTH_HARD_CAP}.`);
  }
  return maxDepth;
}
function getRelationState(relation) {
  if (relation instanceof PermissionRelationBuilder) {
    return relation.toState();
  }
  throw new Error("Expected a relation built from policy.<table> with where/join/hopTo/gather.");
}
function relationColumnRef(column, defaultScope) {
  const [prefix, bare] = splitQualifiedColumn(column);
  if (prefix) {
    return { scope: prefix, column: bare };
  }
  return defaultScope ? { scope: defaultScope, column: bare } : { column: bare };
}
function toRelValueRef(value, options) {
  if (isSessionRefValue(value)) {
    return { SessionRef: value.path };
  }
  if (isRowRefValue(value)) {
    if (!options.allowRowRefs) {
      throw new Error("Row references are only valid inside exists() clauses.");
    }
    return {
      OuterColumn: { column: value.column }
    };
  }
  return { Literal: value };
}
function relationFilterToPredicates(filter) {
  const left = relationColumnRef(filter.column, filter.scope);
  const raw = filter.raw;
  if (raw === null) {
    return [{ IsNull: { column: left } }];
  }
  if (isSessionRefValue(raw) || isRowRefValue(raw)) {
    return [
      {
        Cmp: {
          left,
          op: "Eq",
          right: toRelValueRef(raw, { allowRowRefs: true })
        }
      }
    ];
  }
  if (!isPlainObject(raw)) {
    return [
      {
        Cmp: {
          left,
          op: "Eq",
          right: { Literal: raw }
        }
      }
    ];
  }
  const predicates = [];
  for (const [op, value] of Object.entries(raw)) {
    if (value === void 0) {
      continue;
    }
    switch (op) {
      case "eq":
        if (value === null) {
          predicates.push({ IsNull: { column: left } });
        } else {
          predicates.push({
            Cmp: {
              left,
              op: "Eq",
              right: toRelValueRef(value, { allowRowRefs: true })
            }
          });
        }
        break;
      case "ne":
        if (value === null) {
          predicates.push({ IsNotNull: { column: left } });
        } else {
          predicates.push({
            Cmp: {
              left,
              op: "Ne",
              right: toRelValueRef(value, { allowRowRefs: true })
            }
          });
        }
        break;
      case "gt":
        predicates.push({
          Cmp: {
            left,
            op: "Gt",
            right: toRelValueRef(value, { allowRowRefs: true })
          }
        });
        break;
      case "gte":
        predicates.push({
          Cmp: {
            left,
            op: "Ge",
            right: toRelValueRef(value, { allowRowRefs: true })
          }
        });
        break;
      case "lt":
        predicates.push({
          Cmp: {
            left,
            op: "Lt",
            right: toRelValueRef(value, { allowRowRefs: true })
          }
        });
        break;
      case "lte":
        predicates.push({
          Cmp: {
            left,
            op: "Le",
            right: toRelValueRef(value, { allowRowRefs: true })
          }
        });
        break;
      case "isNull":
        if (typeof value !== "boolean") {
          throw new Error(`"${filter.column}.isNull" expects a boolean value.`);
        }
        predicates.push(value ? { IsNull: { column: left } } : { IsNotNull: { column: left } });
        break;
      case "in":
        if (!Array.isArray(value)) {
          throw new Error(`"${filter.column}.in" expects an array value.`);
        }
        predicates.push({
          In: {
            left,
            values: value.map((entry) => toRelValueRef(entry, { allowRowRefs: true }))
          }
        });
        break;
      case "contains":
        predicates.push({
          Contains: {
            left,
            right: toRelValueRef(value, { allowRowRefs: true })
          }
        });
        break;
      default:
        throw new Error(`Unsupported where operator "${op}" in relation IR lowering.`);
    }
  }
  return predicates.length > 0 ? predicates : ["True"];
}
function andRelPredicates(predicates) {
  if (predicates.length === 0) {
    return "True";
  }
  if (predicates.length === 1) {
    return predicates[0];
  }
  return { And: predicates };
}
function applyRelFilter(input, predicates) {
  const predicate = andRelPredicates(predicates);
  if (predicate === "True") {
    return input;
  }
  return {
    Filter: {
      input,
      predicate
    }
  };
}
function joinConditionFromSpec(join3, leftScope, rightScope) {
  return {
    left: relationColumnRef(join3.left, leftScope),
    right: relationColumnRef(join3.right, rightScope)
  };
}
function projectHopResult(scope) {
  return [
    {
      alias: "id",
      expr: {
        Column: { scope, column: "id" }
      }
    }
  ];
}
function applyRelationTail(options) {
  let relation = options.base;
  let defaultScope = options.initialScope;
  let hasHopJoin = false;
  for (let i = 0; i < options.joins.length; i += 1) {
    const join3 = options.joins[i];
    const rightScope = options.joinAlias(join3, i);
    relation = {
      Join: {
        left: relation,
        right: {
          TableScan: {
            table: join3.table
          }
        },
        on: [joinConditionFromSpec(join3, defaultScope, rightScope)],
        join_kind: "Inner"
      }
    };
    defaultScope = rightScope;
    hasHopJoin ||= Boolean(join3.viaHop);
  }
  const predicates = options.filters.flatMap((filter) => relationFilterToPredicates(filter));
  relation = applyRelFilter(relation, predicates);
  if (options.selectMap && Object.keys(options.selectMap).length > 0) {
    const columns = Object.entries(options.selectMap).map(([alias, column]) => ({
      alias,
      expr: {
        Column: relationColumnRef(column, defaultScope)
      }
    }));
    relation = {
      Project: {
        input: relation,
        columns
      }
    };
  } else if (hasHopJoin) {
    relation = {
      Project: {
        input: relation,
        columns: projectHopResult(defaultScope)
      }
    };
  }
  return relation;
}
function relationStateToRelExpr(state) {
  return applyRelationTail({
    base: state.base,
    initialScope: state.initialScope,
    joins: state.joins,
    filters: state.filters,
    selectMap: state.selectMap,
    joinAlias: (join3, index) => relationJoinAlias(state.kind, join3, index)
  });
}
function relationToIr(relation) {
  return relationStateToRelExpr(getRelationState(relation));
}
function splitQualifiedColumn(column) {
  const dotIndex = column.indexOf(".");
  if (dotIndex < 0) {
    return [void 0, column];
  }
  return [column.slice(0, dotIndex), column.slice(dotIndex + 1)];
}
function stripQualifier(column) {
  const [, bare] = splitQualifiedColumn(column);
  return bare;
}
function createSessionContext() {
  const claimRef = (path) => ({
    __jazzPermissionKind: "session-ref",
    path: normalizeSessionPath(path)
  });
  const whereBuilder = ((input) => ({
    __jazzPermissionKind: "session-where",
    where: normalizeWhereObject(input)
  }));
  return new Proxy({}, {
    get(_target, prop, _receiver) {
      if (typeof prop === "string") {
        if (prop === "where") {
          return whereBuilder;
        }
        return claimRef(prop);
      }
      return void 0;
    }
  });
}
function createAllowedToContext() {
  const inheritsExpr = (operation, fkColumn, options) => {
    const maxDepth = options?.maxDepth;
    if (maxDepth !== void 0) {
      if (!Number.isInteger(maxDepth) || maxDepth <= 0) {
        throw new Error(`allowedTo.*("${fkColumn}") maxDepth must be a positive integer.`);
      }
    }
    const expr = {
      type: "Inherits",
      operation,
      via_column: fkColumn
    };
    if (maxDepth !== void 0) {
      expr.max_depth = maxDepth;
    }
    return expr;
  };
  const inheritsReferencingExpr = (operation, sourceTable, fkColumn, options) => {
    const maxDepth = options?.maxDepth;
    if (maxDepth !== void 0) {
      if (!Number.isInteger(maxDepth) || maxDepth <= 0) {
        throw new Error(`allowedTo.*Referencing(..., "${fkColumn}") maxDepth must be a positive integer.`);
      }
    }
    const expr = {
      type: "InheritsReferencing",
      operation,
      source_table: relationJoinTargetToTable(sourceTable),
      via_column: fkColumn
    };
    if (maxDepth !== void 0) {
      expr.max_depth = maxDepth;
    }
    return expr;
  };
  return {
    read(fkColumn, options) {
      return inheritsExpr("Select", fkColumn, options);
    },
    insert(fkColumn, options) {
      return inheritsExpr("Insert", fkColumn, options);
    },
    update(fkColumn, options) {
      return inheritsExpr("Update", fkColumn, options);
    },
    delete(fkColumn, options) {
      return inheritsExpr("Delete", fkColumn, options);
    },
    readReferencing(sourceTable, fkColumn, options) {
      return inheritsReferencingExpr("Select", sourceTable, fkColumn, options);
    },
    insertReferencing(sourceTable, fkColumn, options) {
      return inheritsReferencingExpr("Insert", sourceTable, fkColumn, options);
    },
    updateReferencing(sourceTable, fkColumn, options) {
      return inheritsReferencingExpr("Update", sourceTable, fkColumn, options);
    },
    deleteReferencing(sourceTable, fkColumn, options) {
      return inheritsReferencingExpr("Delete", sourceTable, fkColumn, options);
    }
  };
}
function normalizeSessionPath(path) {
  const parts = Array.isArray(path) ? path : path.split(".");
  return parts.map((part) => part.trim()).filter((part) => part.length > 0);
}
function createRowContext() {
  return new Proxy({}, {
    get(_target, prop) {
      if (typeof prop === "string") {
        return {
          __jazzPermissionKind: "row-ref",
          column: prop
        };
      }
      return void 0;
    }
  });
}
function normalizeWhereObject(input) {
  if (!isPlainObject(input)) {
    throw new Error("Expected a where-object condition.");
  }
  return input;
}
function resolveWhereInput(input) {
  if (typeof input === "function") {
    const result = input(createRowContext());
    return resolveWhereInput(result);
  }
  if (isSessionWhereCondition(input)) {
    return input;
  }
  if (isExistsCondition(input)) {
    return input;
  }
  if (isExistsRelationCondition(input)) {
    return input;
  }
  if (isCompoundCondition(input)) {
    return input;
  }
  if (isPolicyExpr(input)) {
    return input;
  }
  if (isPlainObject(input)) {
    return {
      __jazzPermissionKind: "where-object",
      where: normalizeWhereObject(input)
    };
  }
  throw new Error("Unsupported permission condition input.");
}
function filtersToCondition(filters, options) {
  const exprs = [];
  for (const filter of filters) {
    exprs.push(...columnFilterToExprs(filter.column, filter.raw, options));
  }
  return andExpr(exprs);
}
function analyzeQualifiedWhereObject(table2, where, relationsByTable) {
  const joins = [];
  const filters = [];
  const qualifiedRelationByPrefix = /* @__PURE__ */ new Map();
  const qualifiedScopeByPrefix = /* @__PURE__ */ new Map();
  let hasQualifiedFilters = false;
  for (const [column, raw] of Object.entries(where)) {
    if (raw === void 0) {
      continue;
    }
    const [prefix, bare] = splitQualifiedColumn(column);
    if (!prefix || prefix === table2) {
      filters.push({ column: bare, raw, scope: table2 });
      continue;
    }
    hasQualifiedFilters = true;
    const relation = resolveQualifiedRuleRelation(relationsByTable, table2, prefix, bare);
    const existingRelation = qualifiedRelationByPrefix.get(prefix);
    if (existingRelation && existingRelation.name !== relation.name) {
      throw new Error(`Qualified where(...) table "${prefix}" is ambiguous from "${table2}"; use an explicit relation instead.`);
    }
    qualifiedRelationByPrefix.set(prefix, relation);
    let scope = qualifiedScopeByPrefix.get(prefix);
    if (!scope) {
      const join3 = relationToJoinSpec(relation);
      joins.push(join3);
      scope = relationJoinAlias("table", join3, joins.length - 1);
      qualifiedScopeByPrefix.set(prefix, scope);
    }
    filters.push({ column: bare, raw, scope });
  }
  return {
    hasQualifiedFilters,
    joins,
    filters
  };
}
function compileQualifiedWhereRelation(table2, where, relationsByTable, options) {
  const analysis = analyzeQualifiedWhereObject(table2, where, relationsByTable);
  let relation = applyRelationTail({
    base: {
      TableScan: {
        table: table2
      }
    },
    initialScope: table2,
    joins: analysis.joins,
    filters: analysis.filters,
    selectMap: void 0,
    joinAlias: (join3, index) => relationJoinAlias("table", join3, index)
  });
  if (!options.anchorOuterRow) {
    return relation;
  }
  relation = applyRelFilter(relation, [
    {
      Cmp: {
        left: {
          scope: table2,
          column: "id"
        },
        op: "Eq",
        right: {
          RowId: "Outer"
        }
      }
    }
  ]);
  return relation;
}
function sessionWhereObjectToCondition(where) {
  const exprs = [];
  for (const [path, raw] of Object.entries(where)) {
    if (raw === void 0) {
      continue;
    }
    exprs.push(...sessionPathFilterToExprs(path, raw));
  }
  return andExpr(exprs);
}
function columnFilterToExprs(column, raw, options) {
  if (raw === null) {
    return [{ type: "IsNull", column }];
  }
  if (isSessionRefValue(raw)) {
    return [cmpExpr(column, "Eq", raw, options)];
  }
  if (isRowRefValue(raw)) {
    if (!options.allowRowRefs) {
      throw new Error("Row references are only valid inside exists() clauses.");
    }
    return [cmpExpr(column, "Eq", raw, options)];
  }
  if (isPlainObject(raw)) {
    const exprs = [];
    for (const [op, value] of Object.entries(raw)) {
      if (value === void 0) {
        continue;
      }
      switch (op) {
        case "eq":
          if (value === null) {
            exprs.push({ type: "IsNull", column });
          } else {
            exprs.push(cmpExpr(column, "Eq", value, options));
          }
          break;
        case "ne":
          if (value === null) {
            exprs.push({ type: "IsNotNull", column });
          } else {
            exprs.push(cmpExpr(column, "Ne", value, options));
          }
          break;
        case "gt":
          exprs.push(cmpExpr(column, "Gt", value, options));
          break;
        case "gte":
          exprs.push(cmpExpr(column, "Ge", value, options));
          break;
        case "lt":
          exprs.push(cmpExpr(column, "Lt", value, options));
          break;
        case "lte":
          exprs.push(cmpExpr(column, "Le", value, options));
          break;
        case "isNull":
          if (typeof value !== "boolean") {
            throw new Error(`"${column}.isNull" expects a boolean value.`);
          }
          exprs.push(value ? { type: "IsNull", column } : { type: "IsNotNull", column });
          break;
        case "contains":
          exprs.push({
            type: "Contains",
            column,
            value: toPolicyValue(value, options)
          });
          break;
        case "in":
          if (isSessionRefValue(value)) {
            exprs.push({
              type: "In",
              column,
              session_path: value.path
            });
            break;
          }
          if (!Array.isArray(value)) {
            throw new Error(`"${column}.in" expects an array or session reference.`);
          }
          if (value.length === 0) {
            exprs.push({ type: "False" });
            break;
          }
          exprs.push({
            type: "InList",
            column,
            values: value.map((entry) => toPolicyValue(entry, options))
          });
          break;
        default:
          throw new Error(`Unsupported where operator "${op}" in permissions DSL.`);
      }
    }
    return exprs.length === 0 ? [{ type: "True" }] : exprs;
  }
  return [cmpExpr(column, "Eq", raw, options)];
}
function sessionPathFilterToExprs(path, raw) {
  const sessionPath = normalizeSessionPath(path);
  if (sessionPath.length === 0) {
    throw new Error("session.where(...) requires non-empty session path keys.");
  }
  if (raw === null) {
    return [{ type: "SessionIsNull", path: sessionPath }];
  }
  if (!isPlainObject(raw) || isSessionRefValue(raw) || isRowRefValue(raw) || isRecursiveCurrentValue(raw) || isExistsCondition(raw) || isExistsRelationCondition(raw) || isCompoundCondition(raw) || isPolicyExpr(raw)) {
    return [sessionCmpExpr(sessionPath, "Eq", raw, path)];
  }
  const exprs = [];
  for (const [op, value] of Object.entries(raw)) {
    if (value === void 0) {
      continue;
    }
    switch (op) {
      case "eq":
        if (value === null) {
          exprs.push({ type: "SessionIsNull", path: sessionPath });
        } else {
          exprs.push(sessionCmpExpr(sessionPath, "Eq", value, path));
        }
        break;
      case "ne":
        if (value === null) {
          exprs.push({ type: "SessionIsNotNull", path: sessionPath });
        } else {
          exprs.push(sessionCmpExpr(sessionPath, "Ne", value, path));
        }
        break;
      case "gt":
        exprs.push(sessionCmpExpr(sessionPath, "Gt", value, path));
        break;
      case "gte":
        exprs.push(sessionCmpExpr(sessionPath, "Ge", value, path));
        break;
      case "lt":
        exprs.push(sessionCmpExpr(sessionPath, "Lt", value, path));
        break;
      case "lte":
        exprs.push(sessionCmpExpr(sessionPath, "Le", value, path));
        break;
      case "isNull":
        if (typeof value !== "boolean") {
          throw new Error(`session.where("${path}.isNull") expects a boolean value.`);
        }
        exprs.push(value ? { type: "SessionIsNull", path: sessionPath } : { type: "SessionIsNotNull", path: sessionPath });
        break;
      case "contains":
        exprs.push({
          type: "SessionContains",
          path: sessionPath,
          value: toPolicyLiteralValue(value, `session.where("${path}.contains")`)
        });
        break;
      case "in":
        if (!Array.isArray(value)) {
          throw new Error(`session.where("${path}.in") expects an array of literal values.`);
        }
        if (value.length === 0) {
          exprs.push({ type: "False" });
          break;
        }
        exprs.push({
          type: "SessionInList",
          path: sessionPath,
          values: value.map((entry) => toPolicyLiteralValue(entry, `session.where("${path}.in")`))
        });
        break;
      default:
        throw new Error(`Unsupported session.where operator "${op}" in permissions DSL. Nested object claim syntax is not supported; use dotted path keys instead.`);
    }
  }
  return exprs.length === 0 ? [{ type: "True" }] : exprs;
}
function cmpExpr(column, op, value, options) {
  return {
    type: "Cmp",
    column,
    op,
    value: toPolicyValue(value, options)
  };
}
function sessionCmpExpr(path, op, value, originalPath) {
  return {
    type: "SessionCmp",
    path,
    op,
    value: toPolicyLiteralValue(value, `session.where("${originalPath}")`)
  };
}
function toPolicyValue(value, options) {
  if (isSessionRefValue(value)) {
    return { type: "SessionRef", path: value.path };
  }
  if (isRowRefValue(value)) {
    if (!options.allowRowRefs) {
      throw new Error("Row references are only valid inside exists() clauses.");
    }
    return {
      type: "SessionRef",
      path: [OUTER_ROW_SESSION_PREFIX, value.column]
    };
  }
  return { type: "Literal", value };
}
function toPolicyLiteralValue(value, context) {
  assertSessionWhereLiteralValue(value, context);
  return { type: "Literal", value };
}
function assertSessionWhereLiteralValue(value, context) {
  if (isSessionRefValue(value)) {
    throw new Error(`${context} only accepts literal values; session references are not supported.`);
  }
  if (isRowRefValue(value)) {
    throw new Error(`${context} only accepts literal values; row references are not supported.`);
  }
  if (isRecursiveCurrentValue(value)) {
    throw new Error(`${context} only accepts literal values; recursive current refs are not supported.`);
  }
  if (isExistsCondition(value) || isExistsRelationCondition(value) || isCompoundCondition(value) || isPolicyExpr(value)) {
    throw new Error(`${context} only accepts literal values; relation and policy expressions are not supported.`);
  }
  if (typeof value === "function" || value === void 0) {
    throw new Error(`${context} only accepts literal values.`);
  }
  if (Array.isArray(value)) {
    for (const entry of value) {
      assertSessionWhereLiteralValue(entry, context);
    }
    return;
  }
  if (isPlainObject(value)) {
    throw new Error(`${context} only accepts literal values; nested objects are not supported.`);
  }
}
function andExpr(exprs) {
  if (exprs.length === 0) {
    return { type: "True" };
  }
  if (exprs.length === 1) {
    return exprs[0];
  }
  return { type: "And", exprs };
}
function anyOf(conditions) {
  return compoundCondition("Or", conditions);
}
function allOf(conditions) {
  return compoundCondition("And", conditions);
}
function alwaysCondition() {
  return allOf([]);
}
function neverCondition() {
  return anyOf([]);
}
function compoundCondition(op, inputs) {
  if (!Array.isArray(inputs)) {
    const fnName = op === "And" ? "allOf" : "anyOf";
    throw new Error(`"${fnName}(...)" expects an array of conditions.`);
  }
  return {
    __jazzPermissionKind: "compound",
    op,
    conditions: inputs.map((input) => resolveWhereInput(input))
  };
}
function compileRules(rules, fkReferencesByTable, relationsByTable) {
  const compiled = {};
  for (const ruleLike of rules) {
    const rule = isUpdateRuleBuilder(ruleLike) ? ruleLike.toRule() : ruleLike;
    if (!compiled[rule.table]) {
      compiled[rule.table] = emptyTablePolicies();
    }
    const tablePolicies = compiled[rule.table];
    switch (rule.action) {
      case "read":
        tablePolicies.select = mergeOperationPolicy(tablePolicies.select, {
          using: compileCondition(rule.using, rule.table, fkReferencesByTable, relationsByTable)
        });
        break;
      case "insert":
        tablePolicies.insert = mergeOperationPolicy(tablePolicies.insert, {
          with_check: compileCondition(rule.withCheck, rule.table, fkReferencesByTable, relationsByTable)
        });
        break;
      case "update":
        tablePolicies.update = mergeOperationPolicy(tablePolicies.update, {
          using: compileCondition(rule.using, rule.table, fkReferencesByTable, relationsByTable),
          with_check: compileCondition(rule.withCheck, rule.table, fkReferencesByTable, relationsByTable)
        });
        break;
      case "delete":
        tablePolicies.delete = mergeOperationPolicy(tablePolicies.delete, {
          using: compileCondition(rule.using, rule.table, fkReferencesByTable, relationsByTable)
        });
        break;
      default:
        throw new Error(`Unsupported action ${rule.action}`);
    }
  }
  return compiled;
}
function emptyOperationPolicy() {
  return {};
}
function emptyTablePolicies() {
  return {
    select: emptyOperationPolicy(),
    insert: emptyOperationPolicy(),
    update: emptyOperationPolicy(),
    delete: emptyOperationPolicy()
  };
}
function mergeOperationPolicy(existing, incoming) {
  return {
    using: mergeExprWithOr(existing?.using, incoming.using),
    with_check: mergeExprWithOr(existing?.with_check, incoming.with_check)
  };
}
function mergeExprWithOr(left, right) {
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  const exprs = [];
  if (left.type === "Or") {
    exprs.push(...left.exprs);
  } else {
    exprs.push(left);
  }
  if (right.type === "Or") {
    exprs.push(...right.exprs);
  } else {
    exprs.push(right);
  }
  return { type: "Or", exprs };
}
function compileCondition(condition, table2, fkReferencesByTable, relationsByTable) {
  if (!condition) {
    return void 0;
  }
  if (isWhereObjectCondition(condition)) {
    const analysis = analyzeQualifiedWhereObject(table2, condition.where, relationsByTable);
    if (analysis.hasQualifiedFilters) {
      return {
        type: "ExistsRel",
        rel: compileQualifiedWhereRelation(table2, condition.where, relationsByTable, {
          anchorOuterRow: true
        })
      };
    }
    const compiledCondition = filtersToCondition(analysis.filters, {
      allowRowRefs: false
    });
    resolveAndAssertInheritsColumns(compiledCondition, table2, fkReferencesByTable);
    return compiledCondition;
  }
  if (isPolicyExpr(condition)) {
    resolveAndAssertInheritsColumns(condition, table2, fkReferencesByTable);
    return condition;
  }
  if (isSessionWhereCondition(condition)) {
    return sessionWhereObjectToCondition(condition.where);
  }
  if (isExistsRelationCondition(condition)) {
    return {
      type: "ExistsRel",
      rel: relationToIr(condition.relation)
    };
  }
  if (isExistsCondition(condition)) {
    const analysis = analyzeQualifiedWhereObject(condition.table, condition.where, relationsByTable);
    if (analysis.hasQualifiedFilters) {
      return {
        type: "ExistsRel",
        rel: compileQualifiedWhereRelation(condition.table, condition.where, relationsByTable, {
          anchorOuterRow: false
        })
      };
    }
    const compiledCondition = filtersToCondition(analysis.filters, {
      allowRowRefs: true
    });
    resolveAndAssertInheritsColumns(compiledCondition, condition.table, fkReferencesByTable);
    return {
      type: "Exists",
      table: condition.table,
      condition: compiledCondition
    };
  }
  if (isCompoundCondition(condition)) {
    const compiledChildren = condition.conditions.map((child) => compileCondition(child, table2, fkReferencesByTable, relationsByTable));
    const exprs = compiledChildren.filter((expr) => Boolean(expr));
    if (exprs.length === 0) {
      return condition.op === "And" ? { type: "True" } : { type: "False" };
    }
    if (exprs.length === 1) {
      return exprs[0];
    }
    return condition.op === "And" ? { type: "And", exprs } : { type: "Or", exprs };
  }
  throw new Error("Unsupported condition in permissions compiler.");
}
function resolveFkColumn(name, fkColumns) {
  if (fkColumns.has(name))
    return name;
  const withId = name + "Id";
  if (fkColumns.has(withId))
    return withId;
  const withUnderId = name + "_id";
  if (fkColumns.has(withUnderId))
    return withUnderId;
  return void 0;
}
function resolveAndAssertInheritsColumns(expr, table2, fkReferencesByTable) {
  const check = (node, currentTable) => {
    switch (node.type) {
      case "Inherits": {
        const fkColumns = fkReferencesByTable.get(currentTable);
        if (!fkColumns) {
          throw new Error(`allowedTo.${node.operation.toLowerCase()}("${node.via_column}") is invalid for table "${currentTable}": table metadata is missing in app.wasmSchema.`);
        }
        const resolved = resolveFkColumn(node.via_column, fkColumns);
        if (!resolved) {
          const fkList = [...fkColumns.keys()].sort();
          const available = fkList.length > 0 ? fkList.join(", ") : "(none)";
          throw new Error(`allowedTo.${node.operation.toLowerCase()}("${node.via_column}") is invalid for table "${currentTable}": column is not a foreign key reference. Available FK columns: ${available}.`);
        }
        node.via_column = resolved;
        break;
      }
      case "InheritsReferencing": {
        const originalColumn = node.via_column;
        const sourceFks = fkReferencesByTable.get(node.source_table);
        if (!sourceFks) {
          throw new Error(`allowedTo.${node.operation.toLowerCase()}Referencing(policy.${node.source_table}, "${originalColumn}") is invalid for table "${currentTable}": source table metadata is missing in app.wasmSchema.`);
        }
        const resolved = resolveFkColumn(originalColumn, sourceFks);
        if (!resolved) {
          const fkList = [...sourceFks.keys()].sort();
          const available = fkList.length > 0 ? fkList.join(", ") : "(none)";
          throw new Error(`allowedTo.${node.operation.toLowerCase()}Referencing(policy.${node.source_table}, "${originalColumn}") is invalid for table "${currentTable}": column is not a foreign key reference on source table. Available FK columns: ${available}.`);
        }
        node.via_column = resolved;
        const referenced = sourceFks.get(resolved);
        if (referenced !== currentTable) {
          throw new Error(`allowedTo.${node.operation.toLowerCase()}Referencing(policy.${node.source_table}, "${originalColumn}") is invalid for table "${currentTable}": source FK references "${referenced}" but this rule is for "${currentTable}".`);
        }
        break;
      }
      case "And":
      case "Or":
        for (const child of node.exprs) {
          check(child, currentTable);
        }
        break;
      case "Not":
        check(node.expr, currentTable);
        break;
      case "Exists":
        check(node.condition, node.table);
        break;
      default:
        break;
    }
  };
  check(expr, table2);
}
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
function isPolicyExpr(input) {
  return isPlainObject(input) && typeof input.type === "string";
}
function isSessionRefValue(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "session-ref" && Array.isArray(input.path);
}
function isSessionWhereCondition(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "session-where" && isPlainObject(input.where);
}
function isRowRefValue(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "row-ref" && typeof input.column === "string";
}
function isExistsCondition(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "exists" && typeof input.table === "string" && isPlainObject(input.where);
}
function isExistsRelationCondition(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "exists-relation" && isPlainObject(input.relation);
}
function isWhereObjectCondition(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "where-object" && isPlainObject(input.where);
}
function isCompoundCondition(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "compound" && (input.op === "And" || input.op === "Or") && Array.isArray(input.conditions);
}
function isRecursiveCurrentValue(input) {
  return isPlainObject(input) && input.__jazzPermissionKind === "recursive-current";
}
function isUpdateRuleBuilder(input) {
  return isPlainObject(input) && typeof input.toRule === "function";
}

// node_modules/jazz-tools/dist/drivers/schema-wire.js
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isWasmSchema(value) {
  return isRecord(value);
}
function normalizeRuntimeSchema(schema2) {
  if (schema2 instanceof Map) {
    return Object.fromEntries(schema2.entries());
  }
  if (!isWasmSchema(schema2)) {
    throw new Error("Invalid runtime schema value.");
  }
  return schema2;
}
function runtimeSchemaJsonReplacer(_key, value) {
  if (value instanceof Uint8Array) {
    return Array.from(value);
  }
  return value;
}
function serializeRuntimeSchema(schema2, options) {
  const envelope = {
    __jazzRuntimeSchema: 1,
    schema: schema2,
    loadedPolicyBundle: options?.loadedPolicyBundle ?? false
  };
  return JSON.stringify(envelope, runtimeSchemaJsonReplacer);
}

// node_modules/jazz-tools/dist/runtime/sync-transport.js
function isOutboxDestinationKind(value) {
  return value === "server" || value === "client";
}
function isOutboxPayload(value) {
  return typeof value === "string" || value instanceof Uint8Array;
}
function normalizeOutboxCallbackArgs(args) {
  if (isOutboxDestinationKind(args[0])) {
    const payload = args[2];
    if (!isOutboxPayload(payload))
      return null;
    return {
      destinationKind: args[0],
      payload,
      isCatalogue: Boolean(args[3])
    };
  }
  if (isOutboxDestinationKind(args[1])) {
    const payload = args[3];
    if (!isOutboxPayload(payload))
      return null;
    return {
      destinationKind: args[1],
      payload,
      isCatalogue: Boolean(args[4])
    };
  }
  if (Array.isArray(args[1]) && isOutboxDestinationKind(args[1][0])) {
    const payload = args[1][2];
    if (!isOutboxPayload(payload))
      return null;
    return {
      destinationKind: args[1][0],
      payload,
      isCatalogue: Boolean(args[1][3])
    };
  }
  return null;
}
function createSyncOutboxRouter(options) {
  const logPrefix = options.logPrefix ?? "";
  return (...args) => {
    const normalized = normalizeOutboxCallbackArgs(args);
    if (!normalized) {
      console.error(`${logPrefix}Invalid sync outbox callback arguments`, args);
      return;
    }
    const { destinationKind, payload, isCatalogue } = normalized;
    if (destinationKind === "client") {
      options.onClientPayload?.(payload);
      return;
    }
    Promise.resolve(options.onServerPayload(payload, isCatalogue)).catch((error) => {
      if (options.onServerPayloadError) {
        options.onServerPayloadError(error);
        return;
      }
      console.error(`${logPrefix}Sync POST error:`, error);
    });
  };
}
function applyUserAuthHeaders(headers, auth) {
  if (auth.jwtToken) {
    headers["Authorization"] = `Bearer ${auth.jwtToken}`;
  }
}

// node_modules/jazz-tools/dist/runtime/client-session.js
var LOCAL_FIRST_JWT_ISSUER = "urn:jazz:local-first";
var ANONYMOUS_JWT_ISSUER = "urn:jazz:anonymous";
function trimOptional(value) {
  if (typeof value !== "string")
    return void 0;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : void 0;
}
function asNonEmptyString(value) {
  return typeof value === "string" ? trimOptional(value) : void 0;
}
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function maybeBuffer() {
  return globalThis.Buffer;
}
function base64UrlToBase64(input) {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padding = normalized.length % 4;
  if (padding === 0)
    return normalized;
  return normalized + "=".repeat(4 - padding);
}
function decodeBase64ToUtf8(base64) {
  const buffer = maybeBuffer();
  if (buffer) {
    try {
      return buffer.from(base64, "base64").toString("utf8");
    } catch {
      return null;
    }
  }
  if (typeof atob === "function") {
    try {
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) {
        bytes[i] = binary.charCodeAt(i);
      }
      return new TextDecoder().decode(bytes);
    } catch {
      return null;
    }
  }
  return null;
}
function parseJwtPayload(jwtToken) {
  const token = trimOptional(jwtToken);
  if (!token)
    return null;
  const parts = token.split(".");
  if (parts.length < 2)
    return null;
  const payloadPart = parts[1];
  if (payloadPart === void 0)
    return null;
  const payloadJson = decodeBase64ToUtf8(base64UrlToBase64(payloadPart));
  if (!payloadJson)
    return null;
  try {
    const parsed = JSON.parse(payloadJson);
    return isRecord2(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
function sessionFromJwtPayload(payload) {
  const subject = asNonEmptyString(payload.sub);
  if (!subject)
    return null;
  const issuer = asNonEmptyString(payload.iss);
  const claimsSource = payload.claims;
  const claims = isRecord2(claimsSource) ? { ...claimsSource } : {};
  claims.subject = subject;
  if (issuer)
    claims.issuer = issuer;
  let authMode;
  if (issuer === LOCAL_FIRST_JWT_ISSUER) {
    authMode = "local-first";
  } else if (issuer === ANONYMOUS_JWT_ISSUER) {
    authMode = "anonymous";
  } else {
    authMode = "external";
  }
  return {
    user_id: subject,
    claims,
    authMode
  };
}
function resolveJwtSession(jwtToken) {
  const payload = parseJwtPayload(jwtToken);
  if (!payload)
    return null;
  return sessionFromJwtPayload(payload);
}
function resolveClientSessionStateSync(config) {
  const jwtSession = resolveJwtSession(config.jwtToken ?? "");
  if (jwtSession) {
    return {
      transport: "bearer",
      session: jwtSession
    };
  }
  if (config.cookieSession) {
    return {
      transport: "cookie",
      session: config.cookieSession
    };
  }
  return {
    transport: null,
    session: null
  };
}
function resolveClientSessionSync(config) {
  return resolveClientSessionStateSync(config).session;
}

// node_modules/jazz-tools/dist/runtime/auth-state.js
function mapAuthReason(reason) {
  const lower = reason.toLowerCase();
  if (lower.includes("expired"))
    return "expired";
  if (lower.includes("missing"))
    return "missing";
  if (lower.includes("disabled"))
    return "disabled";
  return "invalid";
}
function authStateEquals(a, b) {
  if (a.authMode !== b.authMode || a.error !== b.error)
    return false;
  const as = a.session;
  const bs = b.session;
  if (as === bs)
    return true;
  if (!as || !bs)
    return false;
  if (as.user_id !== bs.user_id || as.authMode !== bs.authMode)
    return false;
  return JSON.stringify(as.claims) === JSON.stringify(bs.claims);
}
function deriveAuthMode(input) {
  const resolved = resolveClientSessionStateSync(input);
  return resolved.session?.authMode ?? "external";
}
function deriveInitialState(input) {
  const resolved = resolveClientSessionStateSync(input);
  return {
    authMode: resolved.session?.authMode ?? "external",
    session: resolved.session
  };
}
function createAuthStateStore(input, options) {
  const initialAuthMode = deriveAuthMode(input);
  let state = options?.initialState ?? deriveInitialState(input);
  const listeners = /* @__PURE__ */ new Set();
  const emit = () => {
    for (const listener of listeners) {
      listener(state);
    }
  };
  return {
    getState() {
      return state;
    },
    onChange(listener) {
      listeners.add(listener);
      listener(state);
      return () => {
        listeners.delete(listener);
      };
    },
    markUnauthenticated(reason) {
      const nextState = {
        authMode: initialAuthMode,
        session: state.session,
        error: reason
      };
      if (authStateEquals(state, nextState))
        return state;
      state = nextState;
      emit();
      return state;
    },
    applyJwtToken(jwtToken) {
      if (options?.lockAuthenticatedState) {
        return state;
      }
      const resolved = resolveClientSessionStateSync({
        appId: input.appId,
        jwtToken,
        cookieSession: input.cookieSession
      });
      const currentUserId = state.session?.user_id ?? null;
      const nextUserId = resolved.session?.user_id ?? null;
      if (currentUserId !== nextUserId) {
        throw new Error("Changing auth principal on a live client is not supported. Recreate the Db.");
      }
      const nextState = {
        authMode: initialAuthMode,
        session: resolved.session
      };
      if (authStateEquals(state, nextState))
        return state;
      state = nextState;
      emit();
      return state;
    },
    applyCookieSession(cookieSession) {
      if (options?.lockAuthenticatedState) {
        return state;
      }
      const resolved = resolveClientSessionStateSync({
        appId: input.appId,
        jwtToken: input.jwtToken,
        cookieSession
      });
      const currentUserId = state.session?.user_id ?? null;
      const nextUserId = resolved.session?.user_id ?? null;
      if (currentUserId !== nextUserId) {
        throw new Error("Changing auth principal on a live client is not supported. Recreate the Db.");
      }
      const nextState = {
        authMode: initialAuthMode,
        session: resolved.session
      };
      if (authStateEquals(state, nextState))
        return state;
      state = nextState;
      emit();
      return state;
    }
  };
}

// node_modules/jazz-tools/dist/runtime/query-builder-shape.js
var INTERNAL_REQUIRE_INCLUDES_KEY = "__jazz_requireIncludes";
function isPlainObject2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function normalizeConditions(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((condition) => isPlainObject2(condition) && typeof condition.column === "string" && typeof condition.op === "string");
}
function normalizeOrderBy(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry) => Array.isArray(entry) && entry.length === 2 && typeof entry[0] === "string" && (entry[1] === "asc" || entry[1] === "desc"));
}
function normalizeSelect(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((column) => typeof column === "string");
}
function normalizeGather(value) {
  const maxDepth = isPlainObject2(value) && typeof value.max_depth === "number" ? value.max_depth : NaN;
  if (!isPlainObject2(value) || !Number.isInteger(maxDepth) || maxDepth <= 0 || typeof value.step_table !== "string" || typeof value.step_current_column !== "string") {
    return void 0;
  }
  return {
    ...isPlainObject2(value) && value.seed ? { seed: normalizeBuiltRelation(value.seed) } : {},
    max_depth: maxDepth,
    step_table: value.step_table,
    step_current_column: value.step_current_column,
    step_conditions: normalizeConditions(value.step_conditions),
    step_hops: Array.isArray(value.step_hops) ? value.step_hops.filter((hop) => typeof hop === "string") : []
  };
}
function normalizeBuiltRelation(value) {
  if (!isPlainObject2(value)) {
    return {};
  }
  const normalized = {
    ...typeof value.table === "string" && value.table.length > 0 ? { table: value.table } : {},
    conditions: normalizeConditions(value.conditions),
    hops: Array.isArray(value.hops) ? value.hops.filter((hop) => typeof hop === "string") : [],
    gather: normalizeGather(value.gather)
  };
  if (isPlainObject2(value.union) && Array.isArray(value.union.inputs)) {
    normalized.union = {
      inputs: value.union.inputs.map((input) => normalizeBuiltRelation(input))
    };
  }
  return normalized;
}
function createEmptyIncludeEntry() {
  return {
    conditions: [],
    includes: {},
    requireIncludes: false,
    select: [],
    orderBy: [],
    hops: []
  };
}
function normalizeShorthandIncludeEntries(raw) {
  const nested = { ...raw };
  delete nested[INTERNAL_REQUIRE_INCLUDES_KEY];
  return normalizeIncludeEntries(nested);
}
function isBuiltQueryShape(value) {
  return "table" in value && "conditions" in value && "includes" in value && "orderBy" in value;
}
function isNormalizedIncludeEntryShape(value) {
  return "conditions" in value && "includes" in value && "select" in value && "orderBy" in value;
}
function normalizeIncludeEntry(raw) {
  if (raw === true) {
    return createEmptyIncludeEntry();
  }
  if (!isPlainObject2(raw)) {
    return null;
  }
  if (isBuiltQueryShape(raw)) {
    const normalized = normalizeBuiltQuery(raw, "");
    return {
      table: normalized.table || void 0,
      conditions: normalized.conditions,
      includes: normalized.includes,
      requireIncludes: normalized.requireIncludes,
      select: normalized.select,
      orderBy: normalized.orderBy,
      limit: normalized.limit,
      offset: normalized.offset,
      hops: normalized.hops,
      gather: normalized.gather
    };
  }
  if (isNormalizedIncludeEntryShape(raw)) {
    return {
      table: typeof raw.table === "string" ? raw.table : void 0,
      conditions: normalizeConditions(raw.conditions),
      includes: normalizeIncludeEntries(raw.includes),
      requireIncludes: raw[INTERNAL_REQUIRE_INCLUDES_KEY] === true,
      select: normalizeSelect(raw.select),
      orderBy: normalizeOrderBy(raw.orderBy),
      limit: typeof raw.limit === "number" ? raw.limit : void 0,
      offset: typeof raw.offset === "number" ? raw.offset : void 0,
      hops: Array.isArray(raw.hops) ? raw.hops.filter((hop) => typeof hop === "string") : [],
      gather: normalizeGather(raw.gather)
    };
  }
  const entry = createEmptyIncludeEntry();
  entry.requireIncludes = raw[INTERNAL_REQUIRE_INCLUDES_KEY] === true;
  entry.includes = normalizeShorthandIncludeEntries(raw);
  return entry;
}
function normalizeIncludeEntries(raw) {
  if (!isPlainObject2(raw)) {
    return {};
  }
  const includes = {};
  for (const [relationName, spec] of Object.entries(raw)) {
    if (!spec) {
      continue;
    }
    const normalized = normalizeIncludeEntry(spec);
    if (normalized) {
      includes[relationName] = normalized;
    }
  }
  return includes;
}
function normalizeBuiltQuery(raw, fallbackTable) {
  const value = isPlainObject2(raw) ? raw : {};
  return {
    table: typeof value.table === "string" && value.table.length > 0 ? value.table : fallbackTable,
    conditions: normalizeConditions(value.conditions),
    includes: normalizeIncludeEntries(value.includes),
    requireIncludes: value[INTERNAL_REQUIRE_INCLUDES_KEY] === true,
    select: normalizeSelect(value.select),
    orderBy: normalizeOrderBy(value.orderBy),
    limit: typeof value.limit === "number" ? value.limit : void 0,
    offset: typeof value.offset === "number" ? value.offset : void 0,
    hops: Array.isArray(value.hops) ? value.hops.filter((hop) => typeof hop === "string") : [],
    gather: normalizeGather(value.gather)
  };
}

// node_modules/jazz-tools/dist/runtime/select-projection.js
var HIDDEN_INCLUDE_COLUMN_PREFIX = "__jazz_include_";
function hiddenIncludeColumnName(relationName) {
  return `${HIDDEN_INCLUDE_COLUMN_PREFIX}${relationName}`;
}
function isHiddenIncludeColumnName(columnName) {
  return columnName.startsWith(HIDDEN_INCLUDE_COLUMN_PREFIX);
}
function resolveSelectedColumns(tableName, schema2, projection) {
  const table2 = schema2[tableName];
  if (!table2) {
    throw new Error(`Unknown table "${tableName}" in schema`);
  }
  if (!projection || projection.length === 0) {
    return table2.columns.map((column) => column.name);
  }
  const schemaColumnNames = new Set(table2.columns.map((column) => column.name));
  const selection = {
    explicitColumnsInSchema: /* @__PURE__ */ new Set(),
    explicitColumnsNotInSchema: /* @__PURE__ */ new Set(),
    hasWildcard: false
  };
  for (const column of projection) {
    if (column === "*") {
      selection.hasWildcard = true;
      continue;
    }
    if (column === "id") {
      continue;
    }
    if (schemaColumnNames.has(column)) {
      selection.explicitColumnsInSchema.add(column);
    } else {
      selection.explicitColumnsNotInSchema.add(column);
    }
  }
  if (!selection.hasWildcard) {
    return [...selection.explicitColumnsInSchema, ...selection.explicitColumnsNotInSchema];
  }
  if (selection.explicitColumnsNotInSchema.size === 0) {
    return [...schemaColumnNames];
  }
  return [...schemaColumnNames, ...selection.explicitColumnsNotInSchema];
}

// node_modules/jazz-tools/dist/runtime/query-adapter.js
function relColumn(column, scope) {
  return scope ? { scope, column } : { column };
}
function relationColumnsForTable(table2, scope, schema2) {
  const tableSchema = schema2[table2];
  if (!tableSchema) {
    throw new Error(`Unknown table "${table2}" in relation projection.`);
  }
  return [
    {
      alias: "id",
      expr: { Column: relColumn("id", scope) }
    },
    ...tableSchema.columns.map((column) => ({
      alias: column.name,
      expr: { Column: relColumn(column.name, scope) }
    }))
  ];
}
function getColumnType(schema2, table2, column) {
  if (column === "id")
    return { type: "Uuid" };
  const magicType = magicColumnType(column);
  if (magicType)
    return magicType;
  const tableSchema = schema2[table2];
  if (!tableSchema)
    return void 0;
  const col2 = tableSchema.columns.find((c) => c.name === column);
  return col2?.column_type;
}
function stripQualifier2(column) {
  const parts = column.split(".");
  return parts[parts.length - 1] ?? column;
}
function toTimestampMs2(value) {
  if (value instanceof Date) {
    const ts = value.getTime();
    if (!Number.isFinite(ts)) {
      throw new Error("Invalid Date value for timestamp condition");
    }
    return ts;
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error("Invalid number value for timestamp condition");
    }
    return value;
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
      const fromNumber = Number(trimmed);
      if (Number.isFinite(fromNumber)) {
        return fromNumber;
      }
    }
    const fromIso = Date.parse(trimmed);
    if (Number.isFinite(fromIso)) {
      return fromIso;
    }
  }
  throw new Error("Invalid timestamp condition. Expected Date, ISO string, or finite number.");
}
function toWasmValue(value, columnType) {
  if (value === null || value === void 0) {
    return { type: "Null" };
  }
  if (columnType.type === "Json") {
    return { type: "Text", value: toJsonText(value) };
  }
  if (columnType.type === "Timestamp" && value instanceof Date) {
    return { type: "Timestamp", value: toTimestampMs2(value) };
  }
  if (columnType.type === "Bytea") {
    if (value instanceof Uint8Array) {
      return { type: "Bytea", value: [...value] };
    }
    if (Array.isArray(value)) {
      const bytes = value.map((entry) => {
        const n = Number(entry);
        if (!Number.isInteger(n) || n < 0 || n > 255) {
          throw new Error("Bytea values must contain integers in range 0..255");
        }
        return n;
      });
      return { type: "Bytea", value: bytes };
    }
    throw new Error("Bytea values must be Uint8Array or byte arrays");
  }
  if (Array.isArray(value)) {
    if (columnType.type !== "Array") {
      throw new Error("Unexpected array value for scalar column");
    }
    return {
      type: "Array",
      value: value.map((item) => toWasmValue(item, columnType.element))
    };
  }
  if (typeof value === "boolean") {
    return { type: "Boolean", value };
  }
  if (typeof value === "number") {
    if (columnType?.type === "Timestamp") {
      return { type: "Timestamp", value: toTimestampMs2(value) };
    }
    return { type: "Integer", value };
  }
  if (typeof value === "string") {
    if (columnType?.type === "Timestamp") {
      return { type: "Timestamp", value: toTimestampMs2(value) };
    }
    if (columnType?.type === "Uuid") {
      return { type: "Uuid", value };
    }
    if (columnType?.type === "Enum" && !columnType.variants.includes(value)) {
      throw new Error(`Invalid enum value "${value}". Expected one of: ${columnType.variants.join(", ")}`);
    }
    return { type: "Text", value };
  }
  throw new Error(`Unsupported value type: ${typeof value}`);
}
function includeRequirementForRelation(relation, requireIncludes) {
  if (!requireIncludes || relation.type !== "forward" || relation.nullable) {
    return void 0;
  }
  return relation.isArray ? "MatchCorrelationCardinality" : "AtLeastOne";
}
function visibleSelectColumns(resolvedSelect, includeProjectionColumns = []) {
  const columns = [...resolvedSelect, ...includeProjectionColumns];
  return columns.length > 0 ? columns : null;
}
function validateIncludeBuilderSpec(relation, spec, relationName) {
  if (spec.table && spec.table !== relation.toTable) {
    throw new Error(`Include builder for relation "${relationName}" must target table "${relation.toTable}", got "${spec.table}".`);
  }
  if (typeof spec.offset === "number" && spec.offset !== 0) {
    throw new Error(`Include builder for relation "${relationName}" does not support offset().`);
  }
  if (spec.hops.length > 0) {
    throw new Error(`Include builder for relation "${relationName}" does not support hopTo(...).`);
  }
  if (spec.gather) {
    throw new Error(`Include builder for relation "${relationName}" does not support gather(...).`);
  }
}
function conditionToArraySubqueryFilter(cond, schema2, table2) {
  const column = stripQualifier2(cond.column);
  const columnType = getColumnType(schema2, table2, column);
  if (!columnType) {
    throw new Error(`Unknown column "${column}" in table "${table2}"`);
  }
  if (columnType.type === "Bytea" && ["gt", "gte", "lt", "lte"].includes(cond.op)) {
    throw new Error(`BYTEA column "${column}" only supports eq/ne operators.`);
  }
  if (columnType.type === "Bytea" && cond.op === "contains") {
    throw new Error(`BYTEA column "${column}" does not support contains filters.`);
  }
  if (columnType.type === "Json" && ["gt", "gte", "lt", "lte", "contains"].includes(cond.op)) {
    throw new Error(`JSON column "${column}" only supports eq/ne/in/isNull operators.`);
  }
  const valueTypeForCondition = cond.op === "contains" && columnType.type === "Array" ? columnType.element : columnType;
  const literalValue = toWasmValue(cond.value, valueTypeForCondition);
  const isNullValue = cond.value === void 0 ? true : cond.value;
  switch (cond.op) {
    case "eq":
      if (cond.value === null) {
        return { IsNull: { column } };
      }
      return { Eq: { column, value: literalValue } };
    case "ne":
      if (cond.value === null) {
        return { IsNotNull: { column } };
      }
      return { Ne: { column, value: literalValue } };
    case "gt":
      return { Gt: { column, value: literalValue } };
    case "gte":
      return { Ge: { column, value: literalValue } };
    case "lt":
      return { Lt: { column, value: literalValue } };
    case "lte":
      return { Le: { column, value: literalValue } };
    case "isNull":
      if (typeof isNullValue !== "boolean") {
        throw new Error('"isNull" operator requires a boolean value.');
      }
      return isNullValue ? { IsNull: { column } } : { IsNotNull: { column } };
    case "contains":
      return { Contains: { column, value: literalValue } };
    default:
      throw new Error(`Include builder for table "${table2}" does not support "${cond.op}" filters.`);
  }
}
function toArraySubqueries(includes, tableName, relations, schema2, options) {
  const tableRels = relations.get(tableName) || [];
  const subqueries = [];
  const hideCurrentLevelColumnNames = options?.hideCurrentLevelColumnNames === true;
  const requireCurrentLevelIncludes = options?.requireIncludes === true;
  for (const [relName, spec] of Object.entries(includes)) {
    const rel = tableRels.find((r) => r.name === relName);
    if (!rel) {
      throw new Error(`Unknown relation "${relName}" on table "${tableName}"`);
    }
    validateIncludeBuilderSpec(rel, spec, relName);
    const hasExplicitSelect = spec.select.length > 0;
    const resolvedSelectColumns = hasExplicitSelect ? resolveSelectedColumns(rel.toTable, schema2, spec.select) : [];
    const includeProjectionColumns = hasExplicitSelect ? Object.keys(spec.includes).map((relationName) => hiddenIncludeColumnName(relationName)) : [];
    const filters = spec.conditions.map((condition) => conditionToArraySubqueryFilter(condition, schema2, rel.toTable));
    const orderBy = spec.orderBy.map(([column, direction]) => [
      stripQualifier2(column),
      direction === "desc" ? "Descending" : "Ascending"
    ]);
    const nestedArrays = toArraySubqueries(spec.includes, rel.toTable, relations, schema2, {
      hideCurrentLevelColumnNames: hasExplicitSelect,
      requireIncludes: spec.requireIncludes
    });
    const selectColumns = visibleSelectColumns(resolvedSelectColumns, includeProjectionColumns);
    if (rel.type === "forward") {
      const requirement = includeRequirementForRelation(rel, requireCurrentLevelIncludes);
      subqueries.push({
        column_name: hideCurrentLevelColumnNames ? hiddenIncludeColumnName(relName) : relName,
        table: rel.toTable,
        inner_column: "id",
        outer_column: `${tableName}.${rel.fromColumn}`,
        filters,
        joins: [],
        select_columns: selectColumns,
        order_by: orderBy,
        limit: spec.limit ?? null,
        ...requirement ? { requirement } : {},
        nested_arrays: nestedArrays
      });
    } else {
      subqueries.push({
        column_name: hideCurrentLevelColumnNames ? hiddenIncludeColumnName(relName) : relName,
        table: rel.toTable,
        inner_column: rel.toColumn,
        outer_column: `${tableName}.id`,
        filters,
        joins: [],
        select_columns: selectColumns,
        order_by: orderBy,
        limit: spec.limit ?? null,
        nested_arrays: nestedArrays
      });
    }
  }
  return subqueries;
}
function conditionToRelPredicate(cond, schema2, table2, scope) {
  const columnRef = relColumn(stripQualifier2(cond.column), scope);
  const column = stripQualifier2(cond.column);
  const columnType = getColumnType(schema2, table2, column);
  if (!columnType) {
    throw new Error(`Unknown column "${column}" in table "${table2}"`);
  }
  const valueTypeForCondition = cond.op === "contains" && columnType.type === "Array" ? columnType.element : columnType;
  const rightLiteral = isFrontierRowIdToken(cond.value) && cond.op === "eq" ? { RowId: "Frontier" } : {
    Literal: toWasmValue(cond.value, valueTypeForCondition)
  };
  const isNullValue = cond.value === void 0 ? true : cond.value;
  if (columnType.type === "Bytea" && ["gt", "gte", "lt", "lte"].includes(cond.op)) {
    throw new Error(`BYTEA column "${column}" only supports eq/ne operators.`);
  }
  if (columnType.type === "Bytea" && cond.op === "contains") {
    throw new Error(`BYTEA column "${column}" does not support contains filters.`);
  }
  if (columnType.type === "Json" && ["gt", "gte", "lt", "lte", "contains"].includes(cond.op)) {
    throw new Error(`JSON column "${column}" only supports eq/ne/in/isNull operators.`);
  }
  switch (cond.op) {
    case "eq":
      if (cond.value === null) {
        return { IsNull: { column: columnRef } };
      }
      return { Cmp: { left: columnRef, op: "Eq", right: rightLiteral } };
    case "ne":
      if (cond.value === null) {
        return { IsNotNull: { column: columnRef } };
      }
      return {
        Cmp: {
          left: columnRef,
          op: "Ne",
          right: rightLiteral
        }
      };
    case "gt":
      return {
        Cmp: {
          left: columnRef,
          op: "Gt",
          right: rightLiteral
        }
      };
    case "gte":
      return {
        Cmp: {
          left: columnRef,
          op: "Ge",
          right: rightLiteral
        }
      };
    case "lt":
      return {
        Cmp: {
          left: columnRef,
          op: "Lt",
          right: rightLiteral
        }
      };
    case "lte":
      return {
        Cmp: {
          left: columnRef,
          op: "Le",
          right: rightLiteral
        }
      };
    case "isNull":
      if (typeof isNullValue !== "boolean") {
        throw new Error('"isNull" operator requires a boolean value.');
      }
      return isNullValue ? { IsNull: { column: columnRef } } : { IsNotNull: { column: columnRef } };
    case "contains":
      return { Contains: { left: columnRef, right: rightLiteral } };
    case "in":
      if (!Array.isArray(cond.value)) {
        throw new Error('"in" operator requires an array value');
      }
      return {
        In: {
          left: columnRef,
          values: cond.value.map((value) => ({
            Literal: toWasmValue(value, columnType)
          }))
        }
      };
    default:
      throw new Error(`Unknown operator: ${cond.op}`);
  }
}
function isFrontierRowIdToken(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const marker = value;
  return marker.__jazz_ir_frontier_row_id === true;
}
function conditionsToRelPredicate(conditions, schema2, table2, scope) {
  if (conditions.length === 0) {
    return "True";
  }
  if (conditions.length === 1) {
    return conditionToRelPredicate(conditions[0], schema2, table2, scope);
  }
  return {
    And: conditions.map((condition) => conditionToRelPredicate(condition, schema2, table2, scope))
  };
}
function applyFilter(input, predicate) {
  if (predicate === "True") {
    return input;
  }
  return { Filter: { input, predicate } };
}
function lowerHopsToRelExpr(input, seedTable, hops, relations, schema2) {
  if (hops.length === 0) {
    return input;
  }
  let currentExpr = input;
  let currentTable = seedTable;
  let currentScope = seedTable;
  for (let i = 0; i < hops.length; i += 1) {
    const hopName = hops[i];
    const tableRelations = relations.get(currentTable) ?? [];
    const relation = tableRelations.find((candidate) => candidate.name === hopName);
    if (!relation) {
      throw new Error(`Unknown relation "${hopName}" on table "${currentTable}"`);
    }
    const hopAlias = `__hop_${i}`;
    const joinOn = relation.type === "forward" ? {
      left: relColumn(relation.fromColumn, currentScope),
      right: relColumn("id", hopAlias)
    } : {
      left: relColumn("id", currentScope),
      right: relColumn(relation.toColumn, hopAlias)
    };
    currentExpr = {
      Join: {
        left: currentExpr,
        right: { TableScan: { table: relation.toTable } },
        on: [joinOn],
        join_kind: "Inner"
      }
    };
    currentTable = relation.toTable;
    currentScope = hopAlias;
  }
  return {
    Project: {
      input: currentExpr,
      columns: relationColumnsForTable(currentTable, currentScope, schema2)
    }
  };
}
function gatherToRelExpr(gather, seedTable, seedExpr, relations, schema2) {
  if (!schema2[gather.step_table]) {
    throw new Error(`Unknown gather step table "${gather.step_table}"`);
  }
  if (!Number.isInteger(gather.max_depth) || gather.max_depth <= 0) {
    throw new Error("gather(...) max_depth must be a positive integer.");
  }
  const stepHops = Array.isArray(gather.step_hops) ? gather.step_hops.filter((hop) => typeof hop === "string") : [];
  if (stepHops.length !== 1) {
    throw new Error("gather(...) currently requires exactly one hopTo(...) step.");
  }
  const stepRelations = relations.get(gather.step_table) ?? [];
  const hopName = stepHops[0];
  const hopRelation = stepRelations.find((rel) => rel.name === hopName);
  if (!hopRelation) {
    throw new Error(`Unknown relation "${hopName}" on table "${gather.step_table}"`);
  }
  if (hopRelation.type !== "forward") {
    throw new Error("gather(...) currently only supports forward hopTo(...) relations.");
  }
  if (hopRelation.toTable !== seedTable) {
    throw new Error(`gather(...) step must hop back to "${seedTable}" rows, got "${hopRelation.toTable}".`);
  }
  const stepBase = { TableScan: { table: gather.step_table } };
  const stepConditions = Array.isArray(gather.step_conditions) ? gather.step_conditions : [];
  const stepScope = gather.step_table;
  const stepPredicateConditions = [
    ...stepConditions,
    {
      column: stripQualifier2(gather.step_current_column),
      op: "eq",
      value: { __jazz_ir_frontier_row_id: true }
    }
  ];
  const stepPredicate = conditionsToRelPredicate(stepPredicateConditions, schema2, gather.step_table, stepScope);
  const stepFiltered = applyFilter(stepBase, stepPredicate);
  const recursiveHopAlias = "__recursive_hop_0";
  const stepJoined = {
    Join: {
      left: stepFiltered,
      right: { TableScan: { table: hopRelation.toTable } },
      on: [
        {
          left: relColumn(hopRelation.fromColumn, gather.step_table),
          right: relColumn("id", recursiveHopAlias)
        }
      ],
      join_kind: "Inner"
    }
  };
  const stepProjected = {
    Project: {
      input: stepJoined,
      columns: relationColumnsForTable(seedTable, recursiveHopAlias, schema2)
    }
  };
  return {
    Gather: {
      seed: seedExpr,
      step: stepProjected,
      frontier_key: { RowId: "Current" },
      max_depth: gather.max_depth,
      dedupe_key: [{ RowId: "Current" }]
    }
  };
}
function resolveHopsOutputTable(seedTable, hops, relations) {
  let currentTable = seedTable;
  for (const hopName of hops) {
    const tableRelations = relations.get(currentTable) ?? [];
    const relation = tableRelations.find((candidate) => candidate.name === hopName);
    if (!relation) {
      throw new Error(`Unknown relation "${hopName}" on table "${currentTable}"`);
    }
    currentTable = relation.toTable;
  }
  return currentTable;
}
function translateBuiltRelationToRelExpr(relation, relations, schema2) {
  if (relation.union) {
    const inputs = relation.union.inputs.map((input) => translateBuiltRelationToRelExpr(input, relations, schema2));
    const first = inputs[0];
    if (!first) {
      throw new Error("union(...) requires at least one seed relation.");
    }
    if (inputs.some((input) => input.outputTable !== first.outputTable)) {
      throw new Error("union(...) requires all seed relations to output the same table.");
    }
    return {
      expr: {
        Union: {
          inputs: inputs.map((input) => input.expr)
        }
      },
      outputTable: first.outputTable
    };
  }
  if (!relation.table) {
    throw new Error("gather(...) seed relation is missing table metadata.");
  }
  let expr = { TableScan: { table: relation.table } };
  expr = applyFilter(expr, conditionsToRelPredicate(relation.conditions ?? [], schema2, relation.table, relation.table));
  let outputTable = relation.table;
  if (relation.gather) {
    const seed = relation.gather.seed ? translateBuiltRelationToRelExpr(relation.gather.seed, relations, schema2) : { expr, outputTable };
    expr = gatherToRelExpr(relation.gather, seed.outputTable, seed.expr, relations, schema2);
    outputTable = seed.outputTable;
  }
  const hops = relation.hops ?? [];
  expr = lowerHopsToRelExpr(expr, outputTable, hops, relations, schema2);
  outputTable = resolveHopsOutputTable(outputTable, hops, relations);
  return { expr, outputTable };
}
function translateBuilderToRelationIr(builderJson, schema2) {
  const builder = normalizeBuiltQuery(JSON.parse(builderJson), "");
  const relations = analyzeRelations(schema2);
  const hops = builder.hops;
  if (builder.gather && Object.keys(builder.includes).length > 0) {
    throw new Error("gather(...) does not yet support include(...).");
  }
  if (hops.length > 0 && Object.keys(builder.includes).length > 0) {
    throw new Error("hopTo(...) does not yet support include(...).");
  }
  let relation;
  let relationTable;
  if (builder.gather?.seed) {
    const seed = translateBuiltRelationToRelExpr(builder.gather.seed, relations, schema2);
    relation = gatherToRelExpr(builder.gather, seed.outputTable, seed.expr, relations, schema2);
    relationTable = seed.outputTable;
    relation = applyFilter(relation, conditionsToRelPredicate(builder.conditions, schema2, relationTable, relationTable));
    relation = lowerHopsToRelExpr(relation, relationTable, hops, relations, schema2);
    relationTable = resolveHopsOutputTable(relationTable, hops, relations);
  } else {
    const translated = translateBuiltRelationToRelExpr({
      table: builder.table,
      conditions: builder.conditions,
      hops: builder.hops,
      gather: builder.gather
    }, relations, schema2);
    relation = translated.expr;
    relationTable = translated.outputTable;
  }
  if (Array.isArray(builder.orderBy) && builder.orderBy.length > 0) {
    for (const [column] of builder.orderBy) {
      const columnType = getColumnType(schema2, relationTable, stripQualifier2(column));
      if (columnType?.type === "Bytea") {
        throw new Error(`BYTEA column "${column}" cannot be used in orderBy().`);
      }
      if (columnType?.type === "Json") {
        throw new Error(`JSON column "${column}" cannot be used in orderBy().`);
      }
    }
    relation = {
      OrderBy: {
        input: relation,
        terms: builder.orderBy.map(([column, direction]) => ({
          column: relColumn(column),
          direction: direction === "desc" ? "Desc" : "Asc"
        }))
      }
    };
  }
  if (typeof builder.offset === "number" && builder.offset > 0) {
    relation = {
      Offset: {
        input: relation,
        offset: builder.offset
      }
    };
  }
  if (typeof builder.limit === "number") {
    relation = {
      Limit: {
        input: relation,
        limit: builder.limit
      }
    };
  }
  return relation;
}
function translateQuery(builderJson, schema2) {
  const builder = normalizeBuiltQuery(JSON.parse(builderJson), "");
  const relations = analyzeRelations(schema2);
  const relation = translateBuilderToRelationIr(builderJson, schema2);
  const hasExplicitSelect = builder.select.length > 0;
  const selectColumns = hasExplicitSelect ? resolveSelectedColumns(builder.table, schema2, builder.select) : [];
  const includeProjectionColumns = hasExplicitSelect ? Object.keys(builder.includes).map((relationName) => hiddenIncludeColumnName(relationName)) : [];
  const projectedColumns = visibleSelectColumns(selectColumns, includeProjectionColumns);
  const query = {
    table: builder.table,
    array_subqueries: toArraySubqueries(builder.includes, builder.table, relations, schema2, {
      hideCurrentLevelColumnNames: hasExplicitSelect,
      requireIncludes: builder.requireIncludes
    }),
    relation_ir: relation,
    ...projectedColumns ? { select_columns: projectedColumns } : {}
  };
  return JSON.stringify(query);
}

// node_modules/jazz-tools/dist/runtime/runtime-config.js
function isHttpUrl(moduleUrl) {
  const protocol = new URL(moduleUrl).protocol;
  return protocol === "http:" || protocol === "https:";
}
function isBundledPageContext(locationHref) {
  const protocol = new URL(locationHref).protocol;
  return protocol === "http:" || protocol === "https:" || protocol === "blob:";
}
function resolveBrowserAssetBase(locationHref) {
  return new URL("/", locationHref).href;
}
function resolveConfiguredUrl(url, locationHref) {
  if (locationHref) {
    return new URL(url, locationHref).href;
  }
  return new URL(url).href;
}
function resolveConfiguredBaseUrl(baseUrl, locationHref) {
  if (!locationHref) {
    return null;
  }
  return new URL(baseUrl, locationHref).href;
}
function resolveDerivedWasmUrl(runtimeModuleUrl, locationHref, allowHttpPageFallback) {
  if (!locationHref || isHttpUrl(runtimeModuleUrl) || !allowHttpPageFallback && isBundledPageContext(locationHref)) {
    return null;
  }
  return new URL("jazz_wasm_bg.wasm", resolveBrowserAssetBase(locationHref)).href;
}
function resolveRuntimeConfigSyncInitInput(runtime) {
  if (runtime?.wasmModule) {
    return { module: runtime.wasmModule };
  }
  if (runtime?.wasmSource) {
    return { module: runtime.wasmSource };
  }
  return null;
}
function resolveRuntimeConfigWasmUrl(runtimeModuleUrl, locationHref, runtime) {
  if (runtime?.wasmUrl) {
    return resolveConfiguredUrl(runtime.wasmUrl, locationHref);
  }
  if (runtime?.baseUrl) {
    const baseUrl = resolveConfiguredBaseUrl(runtime.baseUrl, locationHref);
    if (baseUrl) {
      return new URL("jazz_wasm_bg.wasm", baseUrl).href;
    }
  }
  return resolveDerivedWasmUrl(runtimeModuleUrl, locationHref, false);
}
function resolveWorkerBootstrapWasmUrl(runtimeModuleUrl, locationHref, runtime) {
  if (runtime?.wasmUrl) {
    return resolveConfiguredUrl(runtime.wasmUrl, locationHref);
  }
  if (runtime?.baseUrl) {
    const baseUrl = resolveConfiguredBaseUrl(runtime.baseUrl, locationHref);
    if (baseUrl) {
      return new URL("jazz_wasm_bg.wasm", baseUrl).href;
    }
  }
  return resolveDerivedWasmUrl(runtimeModuleUrl, locationHref, true);
}
function resolveRuntimeConfigWorkerUrl(runtimeModuleUrl, locationHref, runtime) {
  if (runtime?.workerUrl) {
    return resolveConfiguredUrl(runtime.workerUrl, locationHref);
  }
  if (runtime?.baseUrl) {
    const baseUrl = resolveConfiguredBaseUrl(runtime.baseUrl, locationHref);
    if (baseUrl) {
      return new URL("worker/jazz-worker.js", baseUrl).href;
    }
  }
  if (!locationHref || isHttpUrl(runtimeModuleUrl)) {
    return new URL("../worker/jazz-worker.js", runtimeModuleUrl).href;
  }
  return new URL("worker/jazz-worker.js", resolveBrowserAssetBase(locationHref)).href;
}
function appendWorkerRuntimeWasmUrl(workerUrl, wasmUrl) {
  if (!wasmUrl) {
    return workerUrl;
  }
  const url = new URL(workerUrl);
  url.searchParams.set("jazz-wasm-url", wasmUrl);
  return url.href;
}

// node_modules/jazz-tools/dist/runtime/anonymous-write-denied-error.js
var AnonymousWriteDeniedError = class extends Error {
  table;
  operation;
  constructor(info, cause) {
    super(`anonymous session cannot ${info.operation} on table ${info.table}`, { cause });
    this.name = "JazzAnonymousWriteDeniedError";
    this.table = info.table;
    this.operation = info.operation;
  }
};
var MESSAGE_PREFIX = "anonymous session cannot ";
var WASM_NAME = "JazzAnonymousWriteDeniedError";
function isAnonymousWriteDenied(error) {
  if (!error || typeof error !== "object")
    return false;
  const maybeName = error.name;
  if (maybeName === WASM_NAME)
    return true;
  const maybeMessage = error.message;
  if (typeof maybeMessage === "string" && maybeMessage.startsWith(MESSAGE_PREFIX)) {
    return true;
  }
  return false;
}
function normalizeRuntimeWriteError(error) {
  if (error instanceof AnonymousWriteDeniedError)
    return error;
  if (!isAnonymousWriteDenied(error))
    return error;
  const info = extractInfo(error);
  return new AnonymousWriteDeniedError(info, error);
}
function extractInfo(error) {
  if (error && typeof error === "object") {
    const table2 = error.table;
    const operation = error.operation;
    if (typeof table2 === "string" && isOperation(operation)) {
      return { table: table2, operation };
    }
    const message = error.message;
    if (typeof message === "string") {
      const parsed = parseMessage(message);
      if (parsed)
        return parsed;
    }
  }
  return { table: "unknown", operation: "insert" };
}
function isOperation(value) {
  return value === "insert" || value === "update" || value === "delete";
}
function parseMessage(message) {
  const match = /^anonymous session cannot (insert|update|delete) on table (.+)$/i.exec(message);
  if (!match)
    return null;
  return { operation: match[1].toLowerCase(), table: match[2] };
}

// node_modules/jazz-tools/dist/runtime/url.js
function appScopedUrl(serverUrl, appId, path) {
  const base = normalizeServerUrlBase(serverUrl);
  const normalizedPath = path.trim().replace(/^\/+/, "");
  const appBase = `${base}/apps/${encodeURIComponent(appId)}`;
  return normalizedPath ? `${appBase}/${normalizedPath}` : appBase;
}
function httpUrlToWs(serverUrl, appId) {
  const parsed = parseServerUrl(serverUrl);
  if (parsed.protocol === "http:") {
    parsed.protocol = "ws:";
    return appScopedUrl(parsed.toString(), appId, "ws");
  }
  if (parsed.protocol === "https:") {
    parsed.protocol = "wss:";
    return appScopedUrl(parsed.toString(), appId, "ws");
  }
  parsed.pathname = parsed.pathname.replace(/\/ws\/?$/, "");
  return appScopedUrl(parsed.toString(), appId, "ws");
}
var ALLOWED_SERVER_URL_PROTOCOLS = /* @__PURE__ */ new Set(["http:", "https:", "ws:", "wss:"]);
function normalizeServerUrlBase(serverUrl) {
  const parsed = parseServerUrl(serverUrl);
  parsed.pathname = parsed.pathname.replace(/\/+$/, "");
  return parsed.toString().replace(/\/+$/, "");
}
function parseServerUrl(serverUrl) {
  let parsed;
  try {
    parsed = new URL(serverUrl.trim());
  } catch {
    throw invalidServerUrl(serverUrl);
  }
  if (!ALLOWED_SERVER_URL_PROTOCOLS.has(parsed.protocol)) {
    throw invalidServerUrl(serverUrl);
  }
  if (parsed.search || parsed.hash) {
    throw new Error(`Invalid server URL "${serverUrl}": must not include query parameters or a hash fragment`);
  }
  return parsed;
}
function invalidServerUrl(serverUrl) {
  return new Error(`Invalid server URL "${serverUrl}": expected http://, https://, ws://, or wss://`);
}

// node_modules/jazz-tools/dist/runtime/client.js
function resolveDefaultDurabilityTier(context) {
  if (context.defaultDurabilityTier) {
    return context.defaultDurabilityTier;
  }
  if (isBrowserRuntime()) {
    return "local";
  }
  return context.serverUrl ? "edge" : "local";
}
function resolveEffectiveQueryExecutionOptions(context, options) {
  return {
    tier: options?.tier ?? resolveDefaultDurabilityTier(context),
    localUpdates: options?.localUpdates ?? "immediate",
    propagation: options?.propagation ?? "full",
    strictTransactions: options?.strictTransactions ?? false,
    visibility: options?.visibility ?? "public"
  };
}
function resolveQueryJson(query) {
  if (typeof query === "string") {
    return query;
  }
  const builtQuery = query._build();
  const schema2 = query._schema;
  if (!schema2 || typeof schema2 !== "object" || Array.isArray(schema2)) {
    return builtQuery;
  }
  try {
    const parsed = JSON.parse(builtQuery);
    if (parsed && typeof parsed === "object" && "relation_ir" in parsed) {
      return builtQuery;
    }
  } catch {
    return builtQuery;
  }
  return translateQuery(builtQuery, schema2);
}
function resolveRelationIrOutputTable(node) {
  if (!node || typeof node !== "object") {
    return null;
  }
  const relation = node;
  if ("TableScan" in relation) {
    const tableScan = relation.TableScan;
    return typeof tableScan?.table === "string" ? tableScan.table : null;
  }
  if ("Filter" in relation) {
    return resolveRelationIrOutputTable(relation.Filter?.input);
  }
  if ("OrderBy" in relation) {
    return resolveRelationIrOutputTable(relation.OrderBy?.input);
  }
  if ("Limit" in relation) {
    return resolveRelationIrOutputTable(relation.Limit?.input);
  }
  if ("Offset" in relation) {
    return resolveRelationIrOutputTable(relation.Offset?.input);
  }
  if ("Project" in relation) {
    return resolveRelationIrOutputTable(relation.Project?.input);
  }
  if ("Gather" in relation) {
    const gather = relation.Gather;
    return resolveRelationIrOutputTable(gather?.seed);
  }
  return null;
}
function parseArraySubqueryPlans(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  const plans = [];
  for (const entry of value) {
    if (typeof entry !== "object" || entry === null) {
      continue;
    }
    const plan = entry;
    if (typeof plan.table !== "string") {
      continue;
    }
    plans.push({
      table: plan.table,
      selectColumns: Array.isArray(plan.select_columns) ? plan.select_columns.filter((column) => typeof column === "string") : [],
      nested: parseArraySubqueryPlans(plan.nested_arrays)
    });
  }
  return plans;
}
function resolveQueryAlignmentPlan(queryJson) {
  try {
    const parsed = JSON.parse(queryJson);
    return {
      outputTable: typeof parsed.table === "string" ? parsed.table : resolveRelationIrOutputTable(parsed.relation_ir),
      arraySubqueries: parseArraySubqueryPlans(parsed.array_subqueries),
      selectColumns: Array.isArray(parsed.select_columns) ? parsed.select_columns.filter((column) => typeof column === "string") : []
    };
  } catch {
    return {
      outputTable: null,
      arraySubqueries: [],
      selectColumns: []
    };
  }
}
function resolveNodeTier(tier) {
  if (!tier)
    return void 0;
  if (Array.isArray(tier)) {
    return tier[0];
  }
  return tier;
}
function isBrowserRuntime() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function getScheduler() {
  if ("scheduler" in globalThis) {
    return (task) => {
      void globalThis.scheduler.postTask(task, { priority: "user-visible" });
    };
  }
  return (task) => queueMicrotask(task);
}
function encodeQueryExecutionOptions(options) {
  const payload = {};
  if ((options.propagation ?? "full") !== "full") {
    payload.propagation = options.propagation;
  }
  if ((options.localUpdates ?? "immediate") !== "immediate") {
    payload.local_updates = options.localUpdates;
  }
  if (options.strictTransactions) {
    payload.strict_transactions = true;
  }
  if (options.transactionOverlay && options.transactionOverlay.rowIds.length > 0) {
    payload.transaction_overlay = {
      batch_id: options.transactionOverlay.batchId,
      branch_name: options.transactionOverlay.branchName,
      row_ids: options.transactionOverlay.rowIds
    };
  }
  if (!payload.propagation && !payload.local_updates && !payload.strict_transactions && !payload.transaction_overlay) {
    return void 0;
  }
  return JSON.stringify(payload);
}
function readHeader(request, name) {
  const lower = name.toLowerCase();
  const fromMethod = request.header?.(name) ?? request.header?.(lower);
  if (typeof fromMethod === "string") {
    return fromMethod;
  }
  const headers = request.headers;
  if (!headers) {
    return void 0;
  }
  if (typeof Headers !== "undefined" && headers instanceof Headers) {
    return headers.get(name) ?? headers.get(lower) ?? void 0;
  }
  const record = headers;
  const raw = record[name] ?? record[lower];
  if (Array.isArray(raw)) {
    return raw[0];
  }
  return raw;
}
function normalizeSubscriptionCallbackArgs(args) {
  if (args.length === 1) {
    return args[0];
  }
  if (args.length === 2 && args[0] == null) {
    return args[1];
  }
  console.error("Invalid subscription callback arguments", args);
  return void 0;
}
function decodeBase64Url(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - base64.length % 4) % 4);
  if (typeof atob === "function") {
    return atob(padded);
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(padded, "base64").toString("utf8");
  }
  throw new Error("No base64 decoder available in this runtime");
}
function sessionFromRequest(request) {
  const authHeader = readHeader(request, "authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    throw new Error("Missing or invalid Authorization header");
  }
  const token = authHeader.slice("Bearer ".length).trim();
  const parts = token.split(".");
  if (parts.length < 2) {
    throw new Error("Invalid JWT format");
  }
  const payloadPart = parts[1];
  if (payloadPart === void 0) {
    throw new Error("Invalid JWT format");
  }
  let payload;
  try {
    payload = JSON.parse(decodeBase64Url(payloadPart));
  } catch {
    throw new Error("Invalid JWT payload");
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("Invalid JWT payload");
  }
  const typedPayload = payload;
  if (typeof typedPayload.sub !== "string" || typedPayload.sub.length === 0) {
    throw new Error("JWT payload missing sub");
  }
  const claims = typedPayload.claims && typeof typedPayload.claims === "object" && !Array.isArray(typedPayload.claims) ? typedPayload.claims : {};
  const issuer = typeof typedPayload.iss === "string" ? typedPayload.iss.trim() : void 0;
  let authMode;
  if (issuer === LOCAL_FIRST_JWT_ISSUER) {
    authMode = "local-first";
  } else if (issuer === ANONYMOUS_JWT_ISSUER) {
    authMode = "anonymous";
  } else {
    authMode = "external";
  }
  return { user_id: typedPayload.sub, claims, authMode };
}
function isObjectAlreadyExistsError(error) {
  const message = error instanceof Error ? error.message : String(error);
  return message.includes("object already exists") || message.includes("Create failed: Conflict");
}
function composeTargetBranchName(schemaContext) {
  return `${schemaContext.env}-${schemaContext.schema_hash.slice(0, 12)}-${schemaContext.user_branch}`;
}
function generateBatchId() {
  const cryptoObj = globalThis.crypto;
  const bytes = new Uint8Array(16);
  if (cryptoObj && typeof cryptoObj.getRandomValues === "function") {
    cryptoObj.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  const timestamp = Date.now();
  bytes[0] = Math.floor(timestamp / 2 ** 40) & 255;
  bytes[1] = Math.floor(timestamp / 2 ** 32) & 255;
  bytes[2] = Math.floor(timestamp / 2 ** 24) & 255;
  bytes[3] = Math.floor(timestamp / 2 ** 16) & 255;
  bytes[4] = Math.floor(timestamp / 2 ** 8) & 255;
  bytes[5] = timestamp & 255;
  bytes[6] = bytes[6] & 15 | 112;
  bytes[8] = bytes[8] & 63 | 128;
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}
function normalizeUpdatedAt(updatedAt) {
  if (updatedAt === void 0) {
    return void 0;
  }
  if (!Number.isFinite(updatedAt) || !Number.isInteger(updatedAt) || updatedAt < 0) {
    throw new Error("Invalid updatedAt override. Expected a non-negative integer.");
  }
  return updatedAt;
}
function durabilityTierRank(tier) {
  switch (tier) {
    case "local":
      return 0;
    case "edge":
      return 1;
    case "global":
      return 2;
  }
}
function settlementSatisfiesTier(settlement, tier) {
  if (!settlement) {
    return false;
  }
  if (settlement.kind !== "durableDirect" && settlement.kind !== "acceptedTransaction") {
    return false;
  }
  return durabilityTierRank(settlement.confirmedTier) >= durabilityTierRank(tier);
}
function rejectionFromSettlement(settlement) {
  if (!settlement || settlement.kind !== "rejected") {
    return null;
  }
  return new PersistedWriteRejectedError(settlement.batchId, settlement.code, settlement.reason);
}
var PersistedWriteRejectedError = class extends Error {
  batchId;
  code;
  reason;
  name = "PersistedWriteRejectedError";
  constructor(batchId, code, reason) {
    super(`Persisted batch ${batchId} was rejected (${code}): ${reason}`);
    this.batchId = batchId;
    this.code = code;
    this.reason = reason;
  }
};
var PersistedWrite = class {
  client;
  requestedTier;
  persistedBatchId;
  persistedValue;
  constructor(client, requestedTier, persistedBatchId, persistedValue) {
    this.client = client;
    this.requestedTier = requestedTier;
    this.persistedBatchId = persistedBatchId;
    this.persistedValue = persistedValue;
  }
  batchId() {
    return this.persistedBatchId;
  }
  value() {
    return this.persistedValue;
  }
  async wait() {
    await this.client.waitForPersistedBatch(this.persistedBatchId, this.requestedTier);
    return this.persistedValue;
  }
};
var WriteHandle = class {
  batchId;
  #client;
  constructor(batchId, client) {
    this.batchId = batchId;
    this.#client = client;
  }
  /**
   * Wait for the write to be persisted at a given durability tier.
   */
  async wait(options) {
    return this.#client.waitForPersistedBatch(this.batchId, options.tier);
  }
  client() {
    return this.#client;
  }
};
var InsertHandle = class _InsertHandle extends WriteHandle {
  value;
  constructor(value, batchId, client) {
    super(batchId, client);
    this.value = value;
  }
  async wait(options) {
    await super.wait(options);
    return this.value;
  }
  mapValue(transformValue) {
    return new _InsertHandle(transformValue(this.value), this.batchId, this.client());
  }
};
var Transaction = class {
  client;
  batchContext;
  session;
  attribution;
  committed = false;
  touchedRowIds = /* @__PURE__ */ new Set();
  constructor(client, batchContext, session, attribution) {
    this.client = client;
    this.batchContext = batchContext;
    this.session = session;
    this.attribution = attribution;
  }
  ensureActive() {
    if (this.committed) {
      throw new Error(`Transaction ${this.batchContext.batchId} is already committed`);
    }
  }
  markTouchedRow(rowId) {
    this.touchedRowIds.add(rowId);
  }
  queryOptions(options) {
    return {
      ...options,
      localUpdates: "deferred",
      transactionOverlay: {
        batchId: this.batchContext.batchId,
        branchName: this.batchContext.targetBranchName,
        rowIds: [...this.touchedRowIds]
      }
    };
  }
  batchId() {
    return this.batchContext.batchId;
  }
  commit() {
    if (this.committed) {
      return this.batchId();
    }
    const batchId = this.client.sealBatch(this.batchId());
    this.committed = true;
    return batchId;
  }
  create(table2, values) {
    this.ensureActive();
    const handle = this.client.createHandleInternal(table2, values, this.session, this.attribution, void 0, this.batchContext);
    this.markTouchedRow(handle.value.id);
    return handle;
  }
  createPersisted(table2, values, options) {
    this.ensureActive();
    const pendingWrite = this.client.createPersistedInternal(table2, values, this.session, this.attribution, options, this.batchContext);
    this.markTouchedRow(pendingWrite.value().id);
    return pendingWrite;
  }
  update(objectId, updates) {
    this.ensureActive();
    const result = this.client.updateHandleInternal(objectId, updates, this.session, this.attribution, this.batchContext);
    this.markTouchedRow(objectId);
    return result;
  }
  updatePersisted(objectId, updates, options) {
    this.ensureActive();
    const pendingWrite = this.client.updatePersistedInternal(objectId, updates, this.session, this.attribution, options, this.batchContext);
    this.markTouchedRow(objectId);
    return pendingWrite;
  }
  delete(objectId) {
    this.ensureActive();
    const result = this.client.deleteHandleInternal(objectId, this.session, this.attribution, this.batchContext);
    this.markTouchedRow(objectId);
    return result;
  }
  deletePersisted(objectId, options) {
    this.ensureActive();
    const pendingWrite = this.client.deletePersistedInternal(objectId, this.session, this.attribution, options, this.batchContext);
    this.markTouchedRow(objectId);
    return pendingWrite;
  }
  async query(query, options) {
    this.ensureActive();
    return this.client.queryInternal(query, this.session, this.queryOptions(options));
  }
  localBatchRecord(batchId = this.batchId()) {
    return this.client.localBatchRecord(batchId);
  }
  localBatchRecords() {
    return this.client.localBatchRecords();
  }
  acknowledgeRejectedBatch(batchId = this.batchId()) {
    return this.client.acknowledgeRejectedBatch(batchId);
  }
};
var DirectBatch = class {
  client;
  batchContext;
  session;
  attribution;
  constructor(client, batchContext, session, attribution) {
    this.client = client;
    this.batchContext = batchContext;
    this.session = session;
    this.attribution = attribution;
  }
  batchId() {
    return this.batchContext.batchId;
  }
  create(table2, values) {
    return this.client.createHandleInternal(table2, values, this.session, this.attribution, void 0, this.batchContext);
  }
  createPersisted(table2, values, options) {
    return this.client.createPersistedInternal(table2, values, this.session, this.attribution, options, this.batchContext);
  }
  update(objectId, updates) {
    return this.client.updateHandleInternal(objectId, updates, this.session, this.attribution, this.batchContext);
  }
  updatePersisted(objectId, updates, options) {
    return this.client.updatePersistedInternal(objectId, updates, this.session, this.attribution, options, this.batchContext);
  }
  delete(objectId) {
    return this.client.deleteHandleInternal(objectId, this.session, this.attribution, this.batchContext);
  }
  deletePersisted(objectId, options) {
    return this.client.deletePersistedInternal(objectId, this.session, this.attribution, options, this.batchContext);
  }
  localBatchRecord(batchId = this.batchId()) {
    return this.client.localBatchRecord(batchId);
  }
  localBatchRecords() {
    return this.client.localBatchRecords();
  }
  acknowledgeRejectedBatch(batchId = this.batchId()) {
    return this.client.acknowledgeRejectedBatch(batchId);
  }
};
var SessionClient = class {
  client;
  session;
  constructor(client, session) {
    this.client = client;
    this.session = session;
  }
  /**
   * Create a new row as this session's user.
   */
  async create(table2, values, options) {
    if (!this.client.getServerUrl()) {
      throw new Error("No server connection");
    }
    const response = await this.client.sendRequest(this.client.getRequestUrl("/sync/object"), "POST", {
      table: table2,
      values,
      schema_context: this.client.getSchemaContext(),
      ...options?.id ? { object_id: options.id } : {},
      ...options?.updatedAt !== void 0 ? { updated_at: normalizeUpdatedAt(options.updatedAt) } : {}
    }, this.session);
    if (!response.ok) {
      throw new Error(`Create failed: ${response.statusText}`);
    }
    const result = await response.json();
    return result.object_id;
  }
  /**
   * Create or update a row as this session's user using a caller-supplied id.
   */
  async upsert(table2, values, options) {
    try {
      await this.create(table2, values, options);
      return;
    } catch (error) {
      if (!isObjectAlreadyExistsError(error)) {
        throw error;
      }
    }
    await this.update(options.id, values, {
      updatedAt: options.updatedAt
    });
  }
  /**
   * Update a row as this session's user.
   */
  async update(objectId, updates, options) {
    if (!this.client.getServerUrl()) {
      throw new Error("No server connection");
    }
    const updateArray = Object.entries(updates);
    const response = await this.client.sendRequest(this.client.getRequestUrl("/sync/object"), "PUT", {
      object_id: objectId,
      updates: updateArray,
      schema_context: this.client.getSchemaContext(),
      ...options?.updatedAt !== void 0 ? { updated_at: normalizeUpdatedAt(options.updatedAt) } : {}
    }, this.session);
    if (!response.ok) {
      throw new Error(`Update failed: ${response.statusText}`);
    }
  }
  /**
   * Delete a row as this session's user.
   */
  async delete(objectId) {
    if (!this.client.getServerUrl()) {
      throw new Error("No server connection");
    }
    const response = await this.client.sendRequest(this.client.getRequestUrl("/sync/object/delete"), "POST", {
      object_id: objectId,
      schema_context: this.client.getSchemaContext()
    }, this.session);
    if (!response.ok) {
      throw new Error(`Delete failed: ${response.statusText}`);
    }
  }
  /**
   * Query as this session's user.
   */
  async query(query, options) {
    return this.client.queryInternal(query, this.session, options);
  }
  /**
   * Subscribe to a query as this session's user.
   */
  subscribe(query, callback, options) {
    return this.client.subscribeInternal(query, callback, this.session, options);
  }
  beginTransaction() {
    return this.client.beginTransactionInternal(this.session);
  }
  beginDirectBatch() {
    return this.client.beginDirectBatchInternal(this.session);
  }
  localBatchRecord(batchId) {
    return this.client.localBatchRecord(batchId);
  }
  localBatchRecords() {
    return this.client.localBatchRecords();
  }
  acknowledgeRejectedBatch(batchId) {
    return this.client.acknowledgeRejectedBatch(batchId);
  }
};
var JazzClient = class _JazzClient {
  runtime;
  scheduler;
  context;
  resolvedSession;
  defaultDurabilityTier;
  /**
   * Promises created with {@link DirectBatch.wait} or {@TODO_link WriteHandle.wait}
   * that are waiting for a batch to be settled.
   */
  pendingBatchWaiters = /* @__PURE__ */ new Map();
  /**
   * Listeners attached with {@link JazzClient.onMutationError} that are notified when a batch is rejected.
   */
  mutationErrorListeners = /* @__PURE__ */ new Set();
  acknowledgedRejectedBatchErrors = /* @__PURE__ */ new Map();
  pendingBatchWaitPollTimer = null;
  shutdownPromise = null;
  cachedRuntimeSchemaHash = null;
  cachedRuntimeSchema = null;
  resolveSessionFromContext() {
    return resolveClientSessionStateSync({
      appId: this.context.appId,
      jwtToken: this.context.jwtToken,
      cookieSession: this.context.cookieSession
    }).session;
  }
  buildTransportAuthPayload() {
    const payload = { jwt_token: this.context.jwtToken ?? null };
    if (this.context.adminSecret) {
      payload.admin_secret = this.context.adminSecret;
    }
    if (this.context.backendSecret) {
      payload.backend_secret = this.context.backendSecret;
    }
    return payload;
  }
  returnsDeclaredSchemaRows() {
    return this.runtime.returnsDeclaredSchemaRows === true;
  }
  constructor(runtime, context, defaultDurabilityTier, runtimeOptions) {
    this.runtime = this.wrapRuntime(runtime);
    this.scheduler = getScheduler();
    this.context = context;
    this.defaultDurabilityTier = defaultDurabilityTier;
    this.resolvedSession = this.resolveSessionFromContext();
    if (runtimeOptions?.onAuthFailure) {
      const handler = runtimeOptions.onAuthFailure;
      this.runtime.onAuthFailure?.((reason) => {
        handler(mapAuthReason(reason));
      });
    }
  }
  wrapRuntime(runtime) {
    return new Proxy(runtime, {
      get: (target, property, receiver) => {
        const value = Reflect.get(target, property, receiver);
        if (property === "onSyncMessageReceived" && typeof value === "function") {
          return (payload, seq) => {
            const batchesWithPendingWaiters = new Set(this.pendingBatchWaiters.keys());
            value.call(target, payload, seq);
            this.flushPendingBatchWaiters();
            this.flushUnhandledMutationErrors(this.drainRejectedBatchIds(), batchesWithPendingWaiters);
          };
        }
        if (typeof value === "function") {
          return value.bind(target);
        }
        return value;
      }
    });
  }
  /**
   * Connect to Jazz with the given context.
   *
   * @param context Application context with driver and schema
   * @returns Connected JazzClient instance
   */
  static async connect(context, runtimeOptions) {
    const wasmModule2 = await loadWasmModule(context.runtimeSources);
    const schemaJson = serializeRuntimeSchema(context.schema);
    const runtime = new wasmModule2.WasmRuntime(schemaJson, context.appId, context.env ?? "dev", context.userBranch ?? "main", resolveNodeTier(context.tier));
    const client = new _JazzClient(runtime, context, resolveDefaultDurabilityTier(context), runtimeOptions);
    return client;
  }
  /**
   * Create client synchronously with a pre-loaded WASM module.
   *
   * Use this after loading WASM via `loadWasmModule()` to avoid
   * async client creation. This enables sync mutations in the Db class.
   *
   * @param wasmModule Pre-loaded WASM module from loadWasmModule()
   * @param context Application context with driver and schema
   * @returns Connected JazzClient instance (created synchronously)
   */
  static connectSync(wasmModule2, context, runtimeOptions) {
    const schemaJson = serializeRuntimeSchema(context.schema);
    const runtime = new wasmModule2.WasmRuntime(schemaJson, context.appId, context.env ?? "dev", context.userBranch ?? "main", resolveNodeTier(context.tier), runtimeOptions?.useBinaryEncoding ?? false);
    return new _JazzClient(runtime, context, resolveDefaultDurabilityTier(context), runtimeOptions);
  }
  /**
   * Create client from a pre-constructed runtime (e.g., NapiRuntime).
   *
   * This allows server-side apps to use the native NAPI backend directly
   * without WASM loading.
   *
   * @param runtime A runtime implementing the Runtime interface
   * @param context Application context
   * @returns Connected JazzClient instance
   */
  static connectWithRuntime(runtime, context, runtimeOptions) {
    return new _JazzClient(runtime, context, resolveDefaultDurabilityTier(context), runtimeOptions);
  }
  /**
   * Create a session-scoped client for backend operations.
   *
   * This allows backend applications to perform operations as a specific user.
   * Requires `backendSecret` to be configured in the `AppContext`.
   *
   * @param session Session to impersonate
   * @returns SessionClient for performing operations as the given user
   * @throws Error if backendSecret is not configured
   *
   * @example
   * ```typescript
   * const userSession = { user_id: "user-123", claims: {} };
   * const userClient = client.forSession(userSession);
   * const id = await userClient.create("todos", {
   *   title: { type: "Text", value: "Buy milk" },
   *   done: { type: "Boolean", value: false },
   * });
   * ```
   */
  forSession(session) {
    if (!this.context.backendSecret) {
      throw new Error("backendSecret required for session impersonation");
    }
    if (!this.context.serverUrl) {
      throw new Error("serverUrl required for session impersonation");
    }
    return new SessionClient(this, session);
  }
  /**
   * Create a session-scoped client from an authenticated HTTP request.
   *
   * Extracts `Authorization: Bearer <jwt>` and maps payload fields:
   * - `sub` -> `session.user_id`
   * - `claims` -> `session.claims` (defaults to `{}`)
   *
   * This helper only extracts payload fields and does not validate JWT signatures.
   * JWT verification should happen in your auth middleware before request handling.
   */
  forRequest(request) {
    return this.forSession(sessionFromRequest(request));
  }
  beginTransaction() {
    return this.beginTransactionInternal();
  }
  beginDirectBatch() {
    return this.beginDirectBatchInternal();
  }
  createBatchContext(batchMode) {
    return {
      batchMode,
      batchId: generateBatchId(),
      targetBranchName: composeTargetBranchName(this.getSchemaContext())
    };
  }
  beginTransactionInternal(session, attribution) {
    return new Transaction(this, this.createBatchContext("transactional"), this.resolveWriteSession(session, attribution), attribution);
  }
  beginDirectBatchInternal(session, attribution) {
    return new DirectBatch(this, this.createBatchContext("direct"), this.resolveWriteSession(session, attribution), attribution);
  }
  localBatchRecord(batchId) {
    return this.requireBatchRecordMethod("loadLocalBatchRecord")(batchId);
  }
  localBatchRecords() {
    const records = this.requireBatchRecordMethod("loadLocalBatchRecords")();
    return [...records].sort((left, right) => left.batchId.localeCompare(right.batchId));
  }
  onMutationError(listener) {
    this.mutationErrorListeners.add(listener);
    this.flushUnhandledMutationErrors();
    return () => {
      this.mutationErrorListeners.delete(listener);
    };
  }
  acknowledgeRejectedBatchInternal(batchId) {
    const rejection = rejectionFromSettlement(this.localBatchRecord(batchId)?.latestSettlement);
    const acknowledged = this.requireBatchRecordMethod("acknowledgeRejectedBatch")(batchId);
    if (acknowledged && rejection) {
      this.acknowledgedRejectedBatchErrors.set(batchId, rejection);
    }
    return acknowledged;
  }
  acknowledgeRejectedBatch(batchId) {
    const acknowledged = this.acknowledgeRejectedBatchInternal(batchId);
    this.flushPendingBatchWaiters();
    return acknowledged;
  }
  sealBatch(batchId) {
    this.requireBatchRecordMethod("sealBatch")(batchId);
    return batchId;
  }
  /**
   * Enable backend-scoped sync auth for this client.
   *
   * In backend mode, sync/event transport uses `X-Jazz-Backend-Secret` instead
   * of end-user auth headers and intentionally does not send admin headers.
   */
  asBackend() {
    if (!this.context.backendSecret) {
      throw new Error("backendSecret required for backend mode");
    }
    if (!this.context.serverUrl) {
      throw new Error("serverUrl required for backend mode");
    }
    return this;
  }
  updateAuthToken(jwtToken) {
    this.context.jwtToken = jwtToken;
    this.resolvedSession = this.resolveSessionFromContext();
    this.runtime.updateAuth?.(JSON.stringify(this.buildTransportAuthPayload()));
  }
  updateCookieSession(cookieSession) {
    this.context.cookieSession = cookieSession;
    this.resolvedSession = this.resolveSessionFromContext();
    this.runtime.updateAuth?.(JSON.stringify(this.buildTransportAuthPayload()));
  }
  normalizeQueryExecutionOptions(options) {
    const resolved = resolveEffectiveQueryExecutionOptions({ ...this.context, defaultDurabilityTier: this.defaultDurabilityTier }, options);
    if (!options?.transactionOverlay) {
      return resolved;
    }
    return {
      ...resolved,
      transactionOverlay: options.transactionOverlay
    };
  }
  resolveWriteTier(options) {
    return options?.tier ?? this.defaultDurabilityTier;
  }
  encodeWriteContext(session, attribution, batchContext, updatedAt) {
    if (!session && attribution === void 0 && !batchContext && updatedAt === void 0) {
      return void 0;
    }
    if (attribution === void 0 && session && !batchContext && updatedAt === void 0) {
      return JSON.stringify(session);
    }
    const payload = {};
    if (session) {
      payload.session = session;
    }
    if (attribution !== void 0) {
      payload.attribution = attribution;
    }
    if (updatedAt !== void 0) {
      payload.updated_at = normalizeUpdatedAt(updatedAt);
    }
    if (batchContext) {
      payload.batch_mode = batchContext.batchMode;
      payload.batch_id = batchContext.batchId;
      payload.target_branch_name = batchContext.targetBranchName;
    }
    return JSON.stringify(payload);
  }
  resolveWriteSession(session, attribution) {
    if (session) {
      return session;
    }
    if (attribution !== void 0) {
      return void 0;
    }
    return this.resolvedSession ?? void 0;
  }
  requireSessionWriteMethod(method) {
    const runtimeMethod = this.runtime[method];
    if (!runtimeMethod) {
      throw new Error(`${String(method)} is not supported by this runtime`);
    }
    return runtimeMethod.bind(this.runtime);
  }
  requirePersistedWriteMethod(method) {
    const runtimeMethod = this.runtime[method];
    if (!runtimeMethod) {
      throw new Error(`${String(method)} is not supported by this runtime`);
    }
    return runtimeMethod.bind(this.runtime);
  }
  requireBatchRecordMethod(method) {
    const runtimeMethod = this.runtime[method];
    if (!runtimeMethod) {
      throw new Error(`${String(method)} is not supported by this runtime`);
    }
    return runtimeMethod.bind(this.runtime);
  }
  alignRowValuesToDeclaredSchema(table2, values, runtimeSchema, arraySubqueries = [], selectColumns = []) {
    if (this.returnsDeclaredSchemaRows()) {
      return values;
    }
    const effectiveRuntimeSchema = runtimeSchema ?? this.getSchema();
    const declaredTable = this.context.schema[table2];
    const runtimeTable = effectiveRuntimeSchema[table2];
    if (!declaredTable || !runtimeTable) {
      return values;
    }
    const projectedVisibleColumnCount = selectColumns.length > 0 ? resolveSelectedColumns(table2, this.context.schema, selectColumns).filter((columnName) => !isHiddenIncludeColumnName(columnName)).length : 0;
    if (projectedVisibleColumnCount > 0) {
      if (values.length < projectedVisibleColumnCount) {
        return values;
      }
      const projectedValues = values.slice(0, projectedVisibleColumnCount);
      const trailingValues2 = values.slice(projectedVisibleColumnCount);
      if (arraySubqueries.length === 0) {
        return projectedValues.concat(trailingValues2);
      }
      const alignedTrailingValues2 = trailingValues2.map((value, index) => {
        const plan = arraySubqueries[index];
        if (!plan) {
          return value;
        }
        return this.alignIncludedValueToDeclaredSchema(value, plan, effectiveRuntimeSchema);
      });
      return projectedValues.concat(alignedTrailingValues2);
    }
    if (values.length < runtimeTable.columns.length) {
      return values;
    }
    const valuesByColumn = /* @__PURE__ */ new Map();
    for (let index = 0; index < runtimeTable.columns.length; index += 1) {
      const column = runtimeTable.columns[index];
      if (!column) {
        return values;
      }
      const value = values[index];
      if (value === void 0) {
        return values;
      }
      valuesByColumn.set(column.name, value);
    }
    const reorderedValues = [];
    for (const column of declaredTable.columns) {
      const value = valuesByColumn.get(column.name);
      if (value === void 0) {
        return values;
      }
      reorderedValues.push(value);
    }
    const trailingValues = values.slice(runtimeTable.columns.length);
    if (arraySubqueries.length === 0) {
      return reorderedValues.concat(trailingValues);
    }
    const alignedTrailingValues = trailingValues.map((value, index) => {
      const plan = arraySubqueries[index];
      if (!plan) {
        return value;
      }
      return this.alignIncludedValueToDeclaredSchema(value, plan, effectiveRuntimeSchema);
    });
    return reorderedValues.concat(alignedTrailingValues);
  }
  alignIncludedValueToDeclaredSchema(value, plan, runtimeSchema) {
    if (this.returnsDeclaredSchemaRows()) {
      return value;
    }
    const effectiveRuntimeSchema = runtimeSchema ?? this.getSchema();
    if (value.type !== "Array") {
      return value;
    }
    return {
      ...value,
      value: value.value.map((entry) => {
        if (entry.type !== "Row") {
          return entry;
        }
        return {
          ...entry,
          value: {
            ...entry.value,
            values: this.alignRowValuesToDeclaredSchema(plan.table, entry.value.values, effectiveRuntimeSchema, plan.nested, plan.selectColumns)
          }
        };
      })
    };
  }
  alignQueryRowsToDeclaredSchema(queryJson, rows, runtimeSchema) {
    if (this.returnsDeclaredSchemaRows()) {
      return rows;
    }
    const effectiveRuntimeSchema = runtimeSchema ?? this.getSchema();
    const { outputTable, arraySubqueries, selectColumns } = resolveQueryAlignmentPlan(queryJson);
    if (!outputTable) {
      return rows;
    }
    return rows.map((row) => ({
      ...row,
      values: this.alignRowValuesToDeclaredSchema(outputTable, row.values, effectiveRuntimeSchema, arraySubqueries, selectColumns)
    }));
  }
  alignSubscriptionDeltaToDeclaredSchema(queryJson, delta, runtimeSchema) {
    if (this.returnsDeclaredSchemaRows()) {
      return delta;
    }
    const effectiveRuntimeSchema = runtimeSchema ?? this.getSchema();
    const { outputTable, arraySubqueries, selectColumns } = resolveQueryAlignmentPlan(queryJson);
    if (!outputTable || !Array.isArray(delta)) {
      return delta;
    }
    return delta.map((change) => {
      if ((change.kind === 0 || change.kind === 2) && change.row) {
        return {
          ...change,
          row: {
            ...change.row,
            values: this.alignRowValuesToDeclaredSchema(outputTable, change.row.values, effectiveRuntimeSchema, arraySubqueries, selectColumns)
          }
        };
      }
      return change;
    });
  }
  /**
   * Insert a new row into a table without waiting for durability.
   */
  create(table2, values, options) {
    return this.createHandleInternal(table2, values, void 0, void 0, options);
  }
  createHandleInternal(table2, values, session, attribution, options, batchContext) {
    const row = this.createInternal(table2, values, session, attribution, options, batchContext);
    return new InsertHandle(row, row.batchId, this);
  }
  /**
   * Create or update a row with a caller-supplied id without waiting for durability.
   */
  upsert(table2, values, options) {
    return this.upsertHandleInternal(table2, values, options.id, void 0, void 0, options.updatedAt);
  }
  upsertHandleInternal(table2, values, objectId, session, attribution, updatedAt) {
    const result = this.upsertInternal(table2, values, objectId, session, attribution, updatedAt);
    return new WriteHandle(result.batchId, this);
  }
  /**
   * Insert a new row into a table with an optional session for policy checks.
   * @internal
   */
  createInternal(table2, values, session, attribution, options, batchContext) {
    const effectiveSession = this.resolveWriteSession(session, attribution);
    const row = effectiveSession || attribution !== void 0 || batchContext || options?.updatedAt !== void 0 ? options?.id ? this.requireSessionWriteMethod("insertWithSession")(table2, values, this.encodeWriteContext(effectiveSession, attribution, batchContext, options.updatedAt), options.id) : this.requireSessionWriteMethod("insertWithSession")(table2, values, this.encodeWriteContext(effectiveSession, attribution, batchContext, options?.updatedAt)) : options?.id ? this.runtime.insert(table2, values, options.id) : this.runtime.insert(table2, values);
    return {
      ...row,
      values: this.alignRowValuesToDeclaredSchema(table2, row.values)
    };
  }
  /**
   * Create or update a row with a caller-supplied id, optionally scoped to a session.
   * @internal
   */
  upsertInternal(table2, values, objectId, session, attribution, updatedAt) {
    try {
      const created = this.createInternal(table2, values, session, attribution, {
        id: objectId,
        updatedAt
      });
      return { batchId: created.batchId };
    } catch (error) {
      if (!isObjectAlreadyExistsError(error)) {
        throw error;
      }
    }
    return this.updateInternal(objectId, values, session, attribution, void 0, updatedAt);
  }
  /**
   * Insert a new row into a table and wait for durability at the requested tier.
   */
  async createDurable(table2, values, options) {
    return this.createDurableInternal(table2, values, void 0, void 0, options);
  }
  /**
   * Create or update a row with a caller-supplied id and wait for durability.
   */
  async upsertDurable(table2, values, options) {
    await this.upsertDurableInternal(table2, values, options.id, void 0, void 0, options);
  }
  /**
   * Insert a new row into a table and wait for durability, optionally scoped to a session.
   * @internal
   */
  async createDurableInternal(table2, values, session, attribution, options) {
    const tier = this.resolveWriteTier(options);
    const effectiveSession = this.resolveWriteSession(session, attribution);
    let row;
    try {
      row = effectiveSession || attribution !== void 0 || options?.updatedAt !== void 0 ? options?.id ? await this.requireSessionWriteMethod("insertDurableWithSession")(table2, values, this.encodeWriteContext(effectiveSession, attribution, void 0, options.updatedAt), tier, options.id) : await this.requireSessionWriteMethod("insertDurableWithSession")(table2, values, this.encodeWriteContext(effectiveSession, attribution, void 0, options?.updatedAt), tier) : options?.id ? await this.runtime.insertDurable(table2, values, tier, options.id) : await this.runtime.insertDurable(table2, values, tier);
    } catch (error) {
      throw normalizeRuntimeWriteError(error);
    }
    return {
      ...row,
      values: this.alignRowValuesToDeclaredSchema(table2, row.values)
    };
  }
  createPersisted(table2, values, options) {
    return this.createPersistedInternal(table2, values, void 0, void 0, options);
  }
  createPersistedInternal(table2, values, session, attribution, options, batchContext) {
    const tier = this.resolveWriteTier(options);
    const effectiveSession = this.resolveWriteSession(session, attribution);
    const result = effectiveSession || attribution !== void 0 || batchContext ? this.requirePersistedWriteMethod("insertPersistedWithSession")(table2, values, this.encodeWriteContext(effectiveSession, attribution, batchContext), tier) : this.requirePersistedWriteMethod("insertPersisted")(table2, values, tier);
    return new PersistedWrite(this, tier, result.batchId, {
      ...result.row,
      values: this.alignRowValuesToDeclaredSchema(table2, result.row.values)
    });
  }
  /**
   * Create or update a row with a caller-supplied id and wait for durability,
   * optionally scoped to a session.
   * @internal
   */
  async upsertDurableInternal(table2, values, objectId, session, attribution, options) {
    try {
      await this.createDurableInternal(table2, values, session, attribution, {
        ...options,
        id: objectId
      });
      return;
    } catch (error) {
      if (!isObjectAlreadyExistsError(error)) {
        throw error;
      }
    }
    await this.updateDurableInternal(objectId, values, session, attribution, options, options?.updatedAt);
  }
  /**
   * Execute a query and return all matching rows.
   *
   * @param query Query builder or JSON-encoded query specification
   * @param options Optional read durability options
   * @returns Array of matching rows
   */
  async query(query, options) {
    return this.queryInternal(query, this.resolvedSession ?? void 0, options);
  }
  /**
   * Internal query with optional session and read durability options.
   * @internal
   */
  async queryInternal(query, session, options, runtimeSchema) {
    const normalizedOptions = this.normalizeQueryExecutionOptions(options);
    const queryJson = resolveQueryJson(query);
    const sessionJson = session ? JSON.stringify(session) : void 0;
    const optionsJson = encodeQueryExecutionOptions(normalizedOptions);
    const effectiveRuntimeSchema = runtimeSchema ?? (this.returnsDeclaredSchemaRows() ? void 0 : this.getSchema());
    const results = await this.runtime.query(queryJson, sessionJson, normalizedOptions.tier, optionsJson);
    return this.alignQueryRowsToDeclaredSchema(queryJson, results, effectiveRuntimeSchema);
  }
  async updateDurable(objectId, updates, options) {
    await this.updateDurableInternal(objectId, updates, void 0, void 0, options, options?.updatedAt);
  }
  async updateDurableInternal(objectId, updates, session, attribution, options, updatedAt) {
    const tier = this.resolveWriteTier(options);
    const effectiveSession = this.resolveWriteSession(session, attribution);
    try {
      if (effectiveSession || attribution !== void 0 || updatedAt !== void 0) {
        await this.requireSessionWriteMethod("updateDurableWithSession")(objectId, updates, this.encodeWriteContext(effectiveSession, attribution, void 0, updatedAt), tier);
        return;
      }
      await this.runtime.updateDurable(objectId, updates, tier);
    } catch (error) {
      throw normalizeRuntimeWriteError(error);
    }
  }
  updatePersisted(objectId, updates, options) {
    return this.updatePersistedInternal(objectId, updates, void 0, void 0, options);
  }
  updatePersistedInternal(objectId, updates, session, attribution, options, batchContext, updatedAt) {
    const tier = this.resolveWriteTier(options);
    const effectiveSession = this.resolveWriteSession(session, attribution);
    const result = effectiveSession || attribution !== void 0 || batchContext || updatedAt !== void 0 ? this.requirePersistedWriteMethod("updatePersistedWithSession")(objectId, updates, this.encodeWriteContext(effectiveSession, attribution, batchContext, updatedAt), tier) : this.requirePersistedWriteMethod("updatePersisted")(objectId, updates, tier);
    return new PersistedWrite(this, tier, result.batchId, void 0);
  }
  /**
   * Update a row by ID without waiting for durability.
   */
  update(objectId, updates, options) {
    return this.updateHandleInternal(objectId, updates, void 0, void 0, void 0, options?.updatedAt);
  }
  updateHandleInternal(objectId, updates, session, attribution, batchContext, updatedAt) {
    const result = this.updateInternal(objectId, updates, session, attribution, batchContext, updatedAt);
    return new WriteHandle(result.batchId, this);
  }
  /**
   * Update a row by ID without waiting for durability, optionally scoped to a session.
   * @internal
   */
  updateInternal(objectId, updates, session, attribution, batchContext, updatedAt) {
    const effectiveSession = this.resolveWriteSession(session, attribution);
    if (effectiveSession || attribution !== void 0 || batchContext || updatedAt !== void 0) {
      return this.requireSessionWriteMethod("updateWithSession")(objectId, updates, this.encodeWriteContext(effectiveSession, attribution, batchContext, updatedAt));
    }
    return this.runtime.update(objectId, updates);
  }
  /**
   * Delete a row by ID without waiting for durability.
   */
  delete(objectId) {
    return this.deleteHandleInternal(objectId);
  }
  deleteHandleInternal(objectId, session, attribution, batchContext, updatedAt) {
    const result = this.deleteInternal(objectId, session, attribution, batchContext, updatedAt);
    return new WriteHandle(result.batchId, this);
  }
  /**
   * Delete a row by ID without waiting for durability, optionally scoped to a session.
   * @internal
   */
  deleteInternal(objectId, session, attribution, batchContext, updatedAt) {
    const effectiveSession = this.resolveWriteSession(session, attribution);
    if (effectiveSession || attribution !== void 0 || batchContext || updatedAt !== void 0) {
      return this.requireSessionWriteMethod("deleteWithSession")(objectId, this.encodeWriteContext(effectiveSession, attribution, batchContext, updatedAt));
    }
    return this.runtime.delete(objectId);
  }
  async deleteDurable(objectId, options) {
    await this.deleteDurableInternal(objectId, void 0, void 0, options);
  }
  async deleteDurableInternal(objectId, session, attribution, options, updatedAt) {
    const tier = this.resolveWriteTier(options);
    const effectiveSession = this.resolveWriteSession(session, attribution);
    try {
      if (effectiveSession || attribution !== void 0 || updatedAt !== void 0) {
        await this.requireSessionWriteMethod("deleteDurableWithSession")(objectId, this.encodeWriteContext(effectiveSession, attribution, void 0, updatedAt), tier);
        return;
      }
      await this.runtime.deleteDurable(objectId, tier);
    } catch (error) {
      throw normalizeRuntimeWriteError(error);
    }
  }
  deletePersisted(objectId, options) {
    return this.deletePersistedInternal(objectId, void 0, void 0, options);
  }
  deletePersistedInternal(objectId, session, attribution, options, batchContext, updatedAt) {
    const tier = this.resolveWriteTier(options);
    const effectiveSession = this.resolveWriteSession(session, attribution);
    const result = effectiveSession || attribution !== void 0 || batchContext || updatedAt !== void 0 ? this.requirePersistedWriteMethod("deletePersistedWithSession")(objectId, this.encodeWriteContext(effectiveSession, attribution, batchContext, updatedAt), tier) : this.requirePersistedWriteMethod("deletePersisted")(objectId, tier);
    return new PersistedWrite(this, tier, result.batchId, void 0);
  }
  /**
   * Subscribe to a query and receive updates when results change.
   *
   * @param query Query builder or JSON-encoded query specification
   * @param callback Called with delta whenever results change
   * @param options Optional read durability options
   * @returns Subscription ID for unsubscribing
   */
  subscribe(query, callback, options) {
    return this.subscribeInternal(query, callback, this.resolvedSession ?? void 0, options);
  }
  /**
   * Internal subscribe with optional session and read durability options.
   *
   * Uses the runtime's 2-phase subscribe API: `createSubscription` allocates
   * a handle synchronously (zero work), then `executeSubscription` is deferred
   * via the scheduler so compilation + first tick run outside the caller's
   * synchronous stack (e.g. outside a React render).
   *
   * @internal
   */
  subscribeInternal(query, callback, session, options, runtimeSchema) {
    const normalizedOptions = this.normalizeQueryExecutionOptions(options);
    const sessionJson = session ? JSON.stringify(session) : void 0;
    const queryJson = resolveQueryJson(query);
    const optionsJson = encodeQueryExecutionOptions(normalizedOptions);
    const effectiveRuntimeSchema = runtimeSchema ?? (this.returnsDeclaredSchemaRows() ? void 0 : this.getSchema());
    const handle = this.runtime.createSubscription(queryJson, sessionJson, normalizedOptions.tier, optionsJson);
    this.scheduler(() => {
      this.runtime.executeSubscription(handle, (...args) => {
        const deltaJsonOrObject = normalizeSubscriptionCallbackArgs(args);
        if (deltaJsonOrObject === void 0) {
          return;
        }
        const delta = typeof deltaJsonOrObject === "string" ? JSON.parse(deltaJsonOrObject) : deltaJsonOrObject;
        callback(this.alignSubscriptionDeltaToDeclaredSchema(queryJson, delta, effectiveRuntimeSchema));
      });
    });
    return handle;
  }
  /**
   * Unsubscribe from a query.
   *
   * @param subscriptionId ID returned from subscribe()
   */
  unsubscribe(subscriptionId) {
    this.runtime.unsubscribe(subscriptionId);
  }
  /**
   * Connect to a Jazz server over WebSocket using the Rust transport layer.
   *
   * Accepts an HTTP/HTTPS server URL (e.g. "http://localhost:4000") and
   * converts it to the corresponding WebSocket `/ws` endpoint URL before
   * passing it to the underlying Rust runtime's `connect()`.  Already-WS URLs
   * are passed through unchanged.
   *
   * @param url  Server URL — http(s):// or ws(s)://. `/apps/<appId>/ws` is appended automatically.
   * @param auth Authentication credentials for the connection.
   */
  connectTransport(url, auth) {
    if (!this.runtime.connect) {
      throw new Error("Underlying runtime does not support connect()");
    }
    this.runtime.connect(httpUrlToWs(url, this.context.appId), JSON.stringify(auth));
  }
  /**
   * Disconnect from the Jazz server and drop the Rust transport handle.
   *
   * No-op if the underlying runtime does not support disconnect().
   */
  disconnectTransport() {
    this.runtime.disconnect?.();
  }
  /**
   * Get the current schema.
   */
  getSchema() {
    const schemaHash = this.runtime.getSchemaHash();
    if (this.cachedRuntimeSchemaHash === schemaHash && this.cachedRuntimeSchema) {
      return this.cachedRuntimeSchema;
    }
    const schema2 = normalizeRuntimeSchema(this.runtime.getSchema());
    this.cachedRuntimeSchemaHash = schemaHash;
    this.cachedRuntimeSchema = schema2;
    return schema2;
  }
  /**
   * Get the underlying runtime (for WorkerBridge).
   * @internal
   */
  getRuntime() {
    return this.runtime;
  }
  /**
   * Get the server URL (for SessionClient).
   * @internal
   */
  getServerUrl() {
    return this.context.serverUrl;
  }
  /**
   * Build a fully-qualified endpoint URL against the configured server.
   * @internal
   */
  getRequestUrl(path) {
    if (!this.context.serverUrl) {
      throw new Error("No server connection");
    }
    return appScopedUrl(this.context.serverUrl, this.context.appId, path);
  }
  /**
   * Get schema context for server requests.
   * @internal
   */
  getSchemaContext() {
    return {
      env: this.context.env ?? "dev",
      schema_hash: this.runtime.getSchemaHash(),
      user_branch: this.context.userBranch ?? "main"
    };
  }
  /**
   * Send an HTTP request with appropriate auth headers.
   * @internal
   */
  async sendRequest(url, method, body, session) {
    const headers = {
      "Content-Type": "application/json"
    };
    if (session && this.context.backendSecret) {
      headers["X-Jazz-Backend-Secret"] = this.context.backendSecret;
      headers["X-Jazz-Session"] = btoa(JSON.stringify(session));
    } else {
      applyUserAuthHeaders(headers, {
        jwtToken: this.context.jwtToken
      });
    }
    return fetch(url, {
      method,
      headers,
      body: JSON.stringify(body)
    });
  }
  batchWaitOutcome(batchId, tier) {
    const acknowledgedRejection = this.acknowledgedRejectedBatchErrors.get(batchId);
    if (acknowledgedRejection) {
      return { settled: true, error: acknowledgedRejection };
    }
    const settlement = this.localBatchRecord(batchId)?.latestSettlement;
    const rejection = rejectionFromSettlement(settlement);
    if (rejection) {
      return { settled: true, error: rejection };
    }
    if (settlementSatisfiesTier(settlement, tier)) {
      return { settled: true, error: null };
    }
    return { settled: false };
  }
  flushPendingBatchWaiters() {
    if (this.pendingBatchWaiters.size === 0) {
      return;
    }
    const rejectedBatchIdsHandledByWaiters = /* @__PURE__ */ new Set();
    for (const [batchId, waiters] of this.pendingBatchWaiters) {
      const remaining = [];
      for (const waiter of waiters) {
        const outcome = this.batchWaitOutcome(batchId, waiter.tier);
        if (!outcome.settled) {
          remaining.push(waiter);
          continue;
        }
        if (outcome.error) {
          waiter.reject(outcome.error);
          rejectedBatchIdsHandledByWaiters.add(batchId);
        } else {
          waiter.resolve();
        }
      }
      if (remaining.length > 0) {
        this.pendingBatchWaiters.set(batchId, remaining);
      } else {
        this.pendingBatchWaiters.delete(batchId);
      }
    }
    for (const batchId of rejectedBatchIdsHandledByWaiters) {
      this.acknowledgeRejectedBatchInternal(batchId);
    }
  }
  ensurePendingBatchWaitPolling() {
    if (this.pendingBatchWaitPollTimer !== null) {
      return;
    }
    if (this.pendingBatchWaiters.size === 0) {
      return;
    }
    this.pendingBatchWaitPollTimer = setTimeout(() => {
      this.pendingBatchWaitPollTimer = null;
      const batchesWithPendingWaiters = new Set(this.pendingBatchWaiters.keys());
      this.flushPendingBatchWaiters();
      this.flushUnhandledMutationErrors(this.drainRejectedBatchIds(), batchesWithPendingWaiters);
      this.ensurePendingBatchWaitPolling();
    }, 20);
  }
  cancelPendingBatchWaitPolling() {
    if (this.pendingBatchWaitPollTimer === null) {
      return;
    }
    clearTimeout(this.pendingBatchWaitPollTimer);
    this.pendingBatchWaitPollTimer = null;
  }
  flushUnhandledMutationErrors(rejectedBatchIds = this.drainRejectedBatchIds(), batchesHandledByLiveWaiters = /* @__PURE__ */ new Set()) {
    for (const batchId of rejectedBatchIds) {
      const record = this.localBatchRecord(batchId);
      if (!record) {
        continue;
      }
      const settlement = record.latestSettlement;
      if (!settlement || settlement.kind !== "rejected") {
        continue;
      }
      if (batchesHandledByLiveWaiters.has(record.batchId)) {
        continue;
      }
      if ((this.pendingBatchWaiters.get(record.batchId)?.length ?? 0) > 0) {
        continue;
      }
      const event = {
        code: settlement.code,
        reason: settlement.reason,
        batch: record
      };
      if (this.mutationErrorListeners.size === 0) {
        console.error("Unhandled Jazz mutation error", event);
      } else {
        for (const listener of this.mutationErrorListeners) {
          listener(event);
        }
      }
      this.acknowledgeRejectedBatchInternal(record.batchId);
    }
  }
  drainRejectedBatchIds() {
    const drainRejectedBatchIds = this.runtime.drainRejectedBatchIds;
    if (!drainRejectedBatchIds) {
      return [];
    }
    return [...new Set(drainRejectedBatchIds.call(this.runtime))].sort();
  }
  waitForPersistedBatch(batchId, tier) {
    const outcome = this.batchWaitOutcome(batchId, tier);
    if (outcome.settled) {
      return outcome.error ? Promise.reject(outcome.error) : Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const waiters = this.pendingBatchWaiters.get(batchId) ?? [];
      waiters.push({ tier, resolve, reject });
      this.pendingBatchWaiters.set(batchId, waiters);
      this.flushPendingBatchWaiters();
      this.ensurePendingBatchWaitPolling();
    });
  }
  /**
   * Shutdown the client and release resources.
   */
  async shutdown() {
    if (this.shutdownPromise) {
      return await this.shutdownPromise;
    }
    this.shutdownPromise = (async () => {
      this.cancelPendingBatchWaitPolling();
      this.runtime.disconnect?.();
      if (this.runtime.close) {
        await this.runtime.close();
      }
    })();
    return await this.shutdownPromise;
  }
};
async function tryLoadNodePackagedWasmBinary() {
  const moduleBuiltin = process.getBuiltinModule?.("module");
  const fsBuiltin = process.getBuiltinModule?.("fs");
  const pathBuiltin = process.getBuiltinModule?.("path");
  if (!moduleBuiltin || !fsBuiltin || !pathBuiltin) {
    return null;
  }
  const { createRequire } = moduleBuiltin;
  const { existsSync, readFileSync: readFileSync3 } = fsBuiltin;
  const { dirname: dirname3, resolve } = pathBuiltin;
  const require2 = createRequire(import.meta.url);
  const packageJsonPath = require2.resolve("jazz-wasm/package.json");
  const packageDir = dirname3(packageJsonPath);
  const wasmPath = resolve(packageDir, "pkg/jazz_wasm_bg.wasm");
  if (!existsSync(wasmPath)) {
    return null;
  }
  return readFileSync3(wasmPath);
}
async function loadWasmModule(runtime) {
  const wasmModule2 = await Promise.resolve().then(() => (init_jazz_wasm(), jazz_wasm_exports));
  const syncInitInput = resolveRuntimeConfigSyncInitInput(runtime);
  if (syncInitInput) {
    wasmModule2.initSync(syncInitInput);
    return wasmModule2;
  }
  let nodeInitDone = false;
  if (typeof process !== "undefined" && process.versions?.node) {
    try {
      const wasmBinary = await tryLoadNodePackagedWasmBinary();
      if (wasmBinary) {
        wasmModule2.initSync({ module: wasmBinary });
        nodeInitDone = true;
      }
    } catch {
    }
  }
  if (!nodeInitDone && typeof wasmModule2.default === "function") {
    const wasmUrl = typeof location !== "undefined" ? resolveRuntimeConfigWasmUrl(import.meta.url, location.href, runtime) : null;
    if (wasmUrl) {
      await wasmModule2.default({ module_or_path: wasmUrl });
    } else {
      await wasmModule2.default();
    }
  }
  return wasmModule2;
}

// node_modules/jazz-tools/dist/runtime/worker-bridge.js
var INIT_RESPONSE_TIMEOUT_MS = 12e3;
var SHUTDOWN_ACK_TIMEOUT_MS = 5e3;
function createDeferredPromise() {
  let resolve;
  const promise = new Promise((resolver) => {
    resolve = resolver;
  });
  return { promise, resolve };
}
var WorkerBridge = class {
  worker;
  runtime;
  state;
  constructor(worker, runtime) {
    const upstreamReady = createDeferredPromise();
    this.worker = worker;
    this.runtime = runtime;
    this.state = {
      phase: "idle",
      workerClientId: null,
      initPromise: null,
      expectsUpstreamServer: false,
      upstreamServerConnected: false,
      upstreamServerReady: upstreamReady.promise,
      resolveUpstreamServerReady: upstreamReady.resolve,
      pendingSyncPayloadsForWorker: [],
      syncBatchFlushQueued: false,
      peerSyncListener: null,
      authFailureListener: null,
      serverPayloadForwarder: null
    };
    this.worker.onmessage = (event) => {
      const msg = event.data;
      if (msg.type === "sync") {
        for (const payload of msg.payload) {
          this.runtime.onSyncMessageReceived(payload);
        }
      } else if (msg.type === "upstream-connected") {
        this.markUpstreamServerConnected();
      } else if (msg.type === "upstream-disconnected") {
        this.markUpstreamServerDisconnected();
      } else if (msg.type === "auth-failed") {
        this.state.authFailureListener?.(msg.reason);
      } else if (msg.type === "peer-sync") {
        this.state.peerSyncListener?.({
          peerId: msg.peerId,
          term: msg.term,
          payload: msg.payload
        });
      }
    };
    this.runtime.onSyncMessageToSend?.(createSyncOutboxRouter({
      onServerPayload: (payload) => {
        if (this.isDisposedLike())
          return;
        if (this.state.serverPayloadForwarder) {
          this.state.serverPayloadForwarder(payload);
        } else {
          this.enqueueSyncMessageForWorker(payload);
        }
      }
    }));
    this.runtime.addServer();
  }
  /**
   * Initialize the worker with schema and config.
   *
   * Waits for the worker to respond with init-ok.
   */
  init(options) {
    if (this.state.initPromise) {
      return this.state.initPromise;
    }
    if (this.isDisposedLike()) {
      const disposedError = Promise.reject(new Error("WorkerBridge has been disposed"));
      this.state.initPromise = disposedError;
      return disposedError;
    }
    this.transition({ type: "INIT_CALLED" });
    const initMsg = {
      type: "init",
      schemaJson: options.schemaJson,
      appId: options.appId,
      env: options.env,
      userBranch: options.userBranch,
      dbName: options.dbName,
      serverUrl: options.serverUrl,
      jwtToken: options.jwtToken,
      adminSecret: options.adminSecret,
      runtimeSources: options.runtimeSources,
      fallbackWasmUrl: options.fallbackWasmUrl,
      logLevel: options.logLevel,
      clientId: ""
      // Worker generates its own client ID for main thread
    };
    this.state.expectsUpstreamServer = Boolean(options.serverUrl);
    if (!this.state.expectsUpstreamServer) {
      this.markUpstreamServerConnected();
    } else {
      this.markUpstreamServerDisconnected();
    }
    const responsePromise = waitForMessage(this.worker, (msg) => msg.type === "init-ok" || msg.type === "error", INIT_RESPONSE_TIMEOUT_MS, "Worker init timeout");
    this.worker.postMessage(initMsg);
    const initPromise = responsePromise.then((response) => {
      if (this.isDisposedLike()) {
        throw new Error("WorkerBridge has been disposed");
      }
      if (response.type === "error") {
        this.transition({ type: "INIT_FAILED" });
        throw new Error(`Worker init failed: ${response.message}`);
      }
      if (response.type === "init-ok") {
        if (this.state.phase !== "initializing") {
          throw new Error("Worker init response arrived after bridge left initializing state");
        }
        this.transition({ type: "INIT_OK", clientId: response.clientId });
        this.flushPendingSyncToWorker();
        return response.clientId;
      }
      throw new Error("Unexpected worker response");
    }).catch((error) => {
      if (this.state.phase !== "disposed") {
        this.transition({ type: "INIT_FAILED" });
      }
      throw error;
    });
    this.state.initPromise = initPromise;
    return initPromise;
  }
  /**
   * Update auth credentials in the worker.
   */
  updateAuth(auth) {
    if (this.isDisposedLike())
      return;
    this.worker.postMessage({ type: "update-auth", ...auth });
  }
  sendLifecycleHint(event) {
    if (this.isDisposedLike())
      return;
    this.worker.postMessage({
      type: "lifecycle-hint",
      event,
      sentAtMs: Date.now()
    });
  }
  /**
   * Shut down the worker and wait for OPFS handles to be released.
   *
   * @param worker The Worker instance (needed for listening to shutdown-ok)
   */
  async shutdown(worker) {
    if (this.isDisposedLike())
      return;
    this.transition({ type: "SHUTDOWN_CALLED" });
    const shutdownAckPromise = waitForMessage(worker, (msg) => msg.type === "shutdown-ok", SHUTDOWN_ACK_TIMEOUT_MS, "Worker shutdown timeout");
    this.worker.postMessage({ type: "shutdown" });
    try {
      await shutdownAckPromise;
      this.transition({ type: "SHUTDOWN_FINISHED" });
    } catch {
      this.transition({ type: "SHUTDOWN_FINISHED" });
    }
  }
  /**
   * Get the client ID the worker assigned to the main thread.
   */
  getWorkerClientId() {
    return this.state.workerClientId;
  }
  setServerPayloadForwarder(forwarder) {
    if (this.isDisposedLike())
      return;
    this.state.serverPayloadForwarder = forwarder;
  }
  async waitForUpstreamServerConnection() {
    if (!this.state.expectsUpstreamServer)
      return;
    if (this.state.serverPayloadForwarder)
      return;
    if (this.state.upstreamServerConnected)
      return;
    await this.state.upstreamServerReady;
  }
  applyIncomingServerPayload(payload) {
    if (this.isDisposedLike())
      return;
    this.runtime.onSyncMessageReceived(payload);
  }
  replayServerConnection() {
    if (this.isDisposedLike())
      return;
    this.runtime.removeServer();
    this.runtime.addServer();
  }
  disconnectUpstream() {
    if (this.isDisposedLike())
      return;
    this.worker.postMessage({ type: "disconnect-upstream" });
  }
  reconnectUpstream() {
    if (this.isDisposedLike())
      return;
    this.worker.postMessage({ type: "reconnect-upstream" });
  }
  onPeerSync(listener) {
    this.state.peerSyncListener = listener;
  }
  onAuthFailure(listener) {
    this.state.authFailureListener = listener;
  }
  openPeer(peerId) {
    if (this.isDisposedLike())
      return;
    this.worker.postMessage({ type: "peer-open", peerId });
  }
  sendPeerSync(peerId, term, payload) {
    if (this.isDisposedLike())
      return;
    if (payload.length === 0)
      return;
    const message = {
      type: "peer-sync",
      peerId,
      term,
      payload
    };
    const transfer = collectPayloadTransferables(payload);
    this.worker.postMessage(message, transfer);
  }
  closePeer(peerId) {
    if (this.isDisposedLike())
      return;
    this.worker.postMessage({ type: "peer-close", peerId });
  }
  enqueueSyncMessageForWorker(payload) {
    if (this.isDisposedLike())
      return;
    this.state.pendingSyncPayloadsForWorker.push(payload);
    if (this.state.syncBatchFlushQueued)
      return;
    this.state.syncBatchFlushQueued = true;
    queueMicrotask(() => {
      if (this.isDisposedLike()) {
        this.state.syncBatchFlushQueued = false;
        this.state.pendingSyncPayloadsForWorker = [];
        return;
      }
      this.state.syncBatchFlushQueued = false;
      this.flushPendingSyncToWorker();
    });
  }
  flushPendingSyncToWorker() {
    if (this.state.phase !== "ready" || this.state.pendingSyncPayloadsForWorker.length === 0) {
      return;
    }
    const payloads = this.state.pendingSyncPayloadsForWorker;
    this.state.pendingSyncPayloadsForWorker = [];
    const message = {
      type: "sync",
      payload: payloads
    };
    const transfer = collectPayloadTransferables(payloads);
    this.worker.postMessage(message, transfer);
  }
  markUpstreamServerConnected() {
    this.state.upstreamServerConnected = true;
    const resolver = this.state.resolveUpstreamServerReady;
    this.state.resolveUpstreamServerReady = null;
    resolver?.();
  }
  markUpstreamServerDisconnected() {
    if (!this.state.expectsUpstreamServer) {
      this.state.upstreamServerConnected = true;
      return;
    }
    if (!this.state.upstreamServerConnected && this.state.resolveUpstreamServerReady) {
      return;
    }
    const deferred = createDeferredPromise();
    this.state.upstreamServerConnected = false;
    this.state.upstreamServerReady = deferred.promise;
    this.state.resolveUpstreamServerReady = deferred.resolve;
  }
  isDisposedLike() {
    return this.state.phase === "disposed" || this.state.phase === "shutting-down";
  }
  transition(event) {
    switch (event.type) {
      case "INIT_CALLED":
        if (this.state.phase === "idle" || this.state.phase === "failed") {
          this.state.phase = "initializing";
        }
        return;
      case "INIT_OK":
        if (this.state.phase !== "initializing")
          return;
        this.state.workerClientId = event.clientId;
        this.state.phase = "ready";
        return;
      case "INIT_FAILED":
        if (this.state.phase !== "initializing")
          return;
        this.state.phase = "failed";
        this.state.syncBatchFlushQueued = false;
        return;
      case "SHUTDOWN_CALLED":
        if (this.state.phase === "disposed" || this.state.phase === "shutting-down")
          return;
        this.state.phase = "shutting-down";
        this.runtime.removeServer();
        return;
      case "SHUTDOWN_FINISHED":
        if (this.state.phase === "disposed")
          return;
        this.state.phase = "disposed";
        this.disposeInternals();
        return;
    }
  }
  disposeInternals() {
    this.state.pendingSyncPayloadsForWorker = [];
    this.state.serverPayloadForwarder = null;
    this.state.peerSyncListener = null;
    this.state.syncBatchFlushQueued = false;
    this.runtime.onSyncMessageToSend?.(() => void 0);
  }
};
function collectPayloadTransferables(payloads) {
  return payloads.map((payload) => payload.buffer);
}
function waitForMessage(worker, predicate, timeoutMs, timeoutMessage) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error(timeoutMessage));
    }, timeoutMs);
    const handler = (event) => {
      if (predicate(event.data)) {
        cleanup();
        resolve(event.data);
      }
    };
    const cleanup = () => {
      clearTimeout(timeout);
      worker.removeEventListener("message", handler);
    };
    worker.addEventListener("message", handler);
  });
}

// node_modules/jazz-tools/dist/runtime/row-transformer.js
function resolveBaseColumns(tableName, schema2, projection) {
  const table2 = schema2[tableName];
  if (!table2) {
    throw new Error(`Unknown table "${tableName}" in schema`);
  }
  return resolveSelectedColumns(tableName, schema2, projection).map((columnName) => {
    const magicType = magicColumnType(columnName);
    if (magicType) {
      return { name: columnName, columnType: magicType };
    }
    const column = table2.columns.find((candidate) => candidate.name === columnName);
    return column ? { name: column.name, columnType: column.column_type } : null;
  }).filter((column) => column !== null);
}
function toByteArray(value) {
  if (value instanceof Uint8Array) {
    return value;
  }
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  if (Array.isArray(value)) {
    const bytes = value.map((entry) => {
      if (typeof entry !== "number" || !Number.isInteger(entry) || entry < 0 || entry > 255) {
        throw new Error("Invalid Bytea array value. Expected integers in range 0..255.");
      }
      return entry;
    });
    return new Uint8Array(bytes);
  }
  throw new Error("Invalid Bytea value. Expected Uint8Array or byte array.");
}
function buildIncludePlans(tableName, includes, relationsByTable) {
  const relations = relationsByTable.get(tableName) || [];
  const plans = [];
  for (const [relationName, spec] of Object.entries(includes)) {
    const relation = relations.find((candidate) => candidate.name === relationName);
    if (!relation) {
      throw new Error(`Unknown relation "${relationName}" on table "${tableName}"`);
    }
    const nested = buildIncludePlans(relation.toTable, spec.includes, relationsByTable);
    plans.push({
      relation,
      nested,
      projection: spec.select.length > 0 ? spec.select : void 0
    });
  }
  return plans;
}
function transformIncludedValue(value, plan, schema2) {
  if (value.type !== "Array") {
    return unwrapValue(value);
  }
  const rows = value.value.map((entry) => {
    if (entry.type !== "Row") {
      return unwrapValue(entry);
    }
    const rowId = entry.value.id;
    const columnValues = entry.value.values;
    return transformRowValues(columnValues, schema2, plan.relation.toTable, plan.nested, rowId, plan.projection);
  });
  return plan.relation.isArray ? rows : rows[0] ?? null;
}
function transformRowValues(values, schema2, tableName, includePlans, rowId, projection) {
  const table2 = schema2[tableName];
  if (!table2) {
    throw new Error(`Unknown table "${tableName}" in schema`);
  }
  const obj = {};
  if (rowId !== void 0) {
    obj.id = rowId;
  }
  const baseColumns = resolveBaseColumns(tableName, schema2, projection);
  for (let i = 0; i < baseColumns.length; i++) {
    const col2 = baseColumns[i];
    if (!col2)
      continue;
    const value = values[i];
    if (value !== void 0) {
      obj[col2.name] = unwrapValue(value, col2.columnType);
    }
  }
  for (let i = 0; i < includePlans.length; i++) {
    const value = values[baseColumns.length + i];
    if (value === void 0)
      continue;
    const plan = includePlans[i];
    if (!plan)
      continue;
    obj[plan.relation.name] = transformIncludedValue(value, plan, schema2);
  }
  return obj;
}
function unwrapValue(v, columnType) {
  switch (v.type) {
    case "Text":
      if (columnType?.type === "Json") {
        try {
          return JSON.parse(v.value);
        } catch (error) {
          throw new Error(`Invalid stored JSON value: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
      return v.value;
    case "Uuid":
      return v.value;
    case "Boolean":
      return v.value;
    case "Integer":
    case "BigInt":
    case "Double":
      return v.value;
    case "Timestamp":
      return new Date(v.value);
    case "Bytea":
      return toByteArray(v.value);
    case "Null":
      return null;
    case "Array":
      if (columnType?.type === "Array") {
        return v.value.map((entry) => unwrapValue(entry, columnType.element));
      }
      return v.value.map((entry) => unwrapValue(entry));
    case "Row":
      if (columnType?.type === "Row") {
        return v.value.values.map((entry, index) => unwrapValue(entry, columnType.columns[index]?.column_type));
      }
      return v.value.values.map((entry) => unwrapValue(entry));
  }
}
function transformRows(rows, schema2, tableName, includes = {}, projection) {
  if (!schema2[tableName]) {
    throw new Error(`Unknown table "${tableName}" in schema`);
  }
  const includePlans = Object.keys(includes).length === 0 ? [] : buildIncludePlans(tableName, normalizeIncludeEntries(includes), analyzeRelations(schema2));
  return rows.map((row) => {
    return transformRowValues(row.values, schema2, tableName, includePlans, row.id, projection);
  });
}
function transformRow(row, schema2, tableName, includes = {}, projection) {
  const transformed = transformRows([row], schema2, tableName, includes, projection)[0];
  if (transformed === void 0) {
    throw new Error(`Failed to transform row for table "${tableName}"`);
  }
  return transformed;
}

// node_modules/jazz-tools/dist/runtime/subscription-manager.js
var RowChangeKind = {
  Added: 0,
  Removed: 1,
  Updated: 2
};
var SubscriptionManager = class {
  currentResults = /* @__PURE__ */ new Map();
  orderedIds = [];
  removeId(id) {
    const index = this.orderedIds.indexOf(id);
    if (index !== -1) {
      this.orderedIds.splice(index, 1);
    }
  }
  insertIdAt(id, index) {
    const clamped = Math.max(0, Math.min(index, this.orderedIds.length));
    this.orderedIds.splice(clamped, 0, id);
  }
  /**
   * Process a row delta and return typed object delta.
   *
   * @param delta Raw row delta from WASM runtime
   * @param transform Function to convert WasmRow to typed object T
   * @returns Typed delta with full state and changes
   */
  handleDelta(delta, transform) {
    delta.sort((a, b) => a.index - b.index);
    for (const change of delta) {
      switch (change.kind) {
        case RowChangeKind.Added:
          this.currentResults.set(change.id, transform(change.row));
          this.removeId(change.id);
          this.insertIdAt(change.id, change.index);
          break;
        case RowChangeKind.Removed:
          this.currentResults.delete(change.id);
          this.removeId(change.id);
          break;
        case RowChangeKind.Updated:
          this.removeId(change.id);
          this.insertIdAt(change.id, change.index);
          if (change.row) {
            this.currentResults.set(change.id, transform(change.row));
          }
          break;
      }
    }
    return {
      all: this.orderedIds.map((id) => this.currentResults.get(id)).filter((item) => item !== void 0),
      delta
    };
  }
  /**
   * Clear all tracked state.
   *
   * Called when unsubscribing to free memory.
   */
  clear() {
    this.currentResults.clear();
    this.orderedIds = [];
  }
  /**
   * Get the current number of tracked items.
   */
  get size() {
    return this.currentResults.size;
  }
};

// node_modules/jazz-tools/dist/runtime/file-storage.js
var DEFAULT_FILE_CHUNK_SIZE_BYTES = 256 * 1024;
var MAX_FILE_PART_BYTES = 1048576;
var DEFAULT_MIME_TYPE = "application/octet-stream";
var FileNotFoundError = class extends Error {
  fileId;
  constructor(fileId) {
    super(`File "${fileId}" was not found.`);
    this.name = "FileNotFoundError";
    this.fileId = fileId;
  }
};
var IncompleteFileDataError = class extends Error {
  fileId;
  reason;
  partId;
  partIndex;
  constructor(fileId, reason, message, options = {}) {
    super(message);
    this.name = "IncompleteFileDataError";
    this.fileId = fileId;
    this.reason = reason;
    this.partId = options.partId;
    this.partIndex = options.partIndex;
  }
};
var DEFAULT_COLUMNS = {
  name: "name",
  mimeType: "mimeType",
  partIds: "partIds",
  partSizes: "partSizes",
  data: "data"
};
function createFileStorage(db, options) {
  const columns = {
    ...DEFAULT_COLUMNS,
    ...options.columns
  };
  const defaultChunkSizeBytes = options.defaultChunkSizeBytes ?? DEFAULT_FILE_CHUNK_SIZE_BYTES;
  validateChunkSize(defaultChunkSizeBytes);
  const insertRow = async (table2, data, writeOptions) => {
    const insertHandle = db.insert(table2, data);
    if (writeOptions?.tier) {
      return insertHandle.wait({ tier: writeOptions.tier });
    }
    return insertHandle.value;
  };
  const loadFileRecord = async (fileOrId, readOptions) => {
    const queryOptions = toQueryOptions(readOptions);
    if (typeof fileOrId === "string") {
      const file = await db.one(options.files.where({ id: fileOrId }), queryOptions);
      if (!file) {
        throw new FileNotFoundError(fileOrId);
      }
      return normalizeFileRecord(file, columns);
    }
    return normalizeFileRecord(fileOrId, columns);
  };
  const loadPartBytes = async (file, partIndex, readOptions) => {
    const partId = file.partIds[partIndex];
    const expectedSize = file.partSizes[partIndex];
    const queryOptions = toQueryOptions(readOptions);
    const part = await db.one(options.fileParts.where({ id: partId }), queryOptions);
    if (!part) {
      throw new IncompleteFileDataError(file.id, "missing-part", `File "${file.id}" is incomplete: missing part ${partIndex} (${partId}) at the requested query tier.`, { partId, partIndex });
    }
    const raw = part[columns.data];
    const bytes = asUint8Array(raw, `File part "${partId}" has invalid "${columns.data}" data.`);
    if (bytes.length !== expectedSize) {
      throw new IncompleteFileDataError(file.id, "part-size-mismatch", `File "${file.id}" is incomplete: part ${partIndex} (${partId}) expected ${expectedSize} bytes, got ${bytes.length}.`, { partId, partIndex });
    }
    return bytes;
  };
  const createReadStream = (file, readOptions) => {
    let nextIndex = 0;
    let canceled = false;
    return new ReadableStream({
      async pull(controller) {
        if (canceled) {
          controller.close();
          return;
        }
        if (nextIndex >= file.partIds.length) {
          controller.close();
          return;
        }
        const currentIndex = nextIndex;
        nextIndex += 1;
        try {
          const bytes = await loadPartBytes(file, currentIndex, readOptions);
          if (canceled) {
            controller.close();
            return;
          }
          controller.enqueue(bytes);
          if (nextIndex >= file.partIds.length) {
            controller.close();
          }
        } catch (error) {
          controller.error(error);
        }
      },
      cancel() {
        canceled = true;
      }
    });
  };
  return {
    async fromBlob(blob, writeOptions = {}) {
      const name = writeOptions.name ?? getFileName(blob);
      const mimeType = writeOptions.mimeType ?? (blob.type || DEFAULT_MIME_TYPE);
      return this.fromStream(blob.stream(), {
        ...writeOptions,
        mimeType,
        ...name !== void 0 ? { name } : {}
      });
    },
    async fromStream(stream, writeOptions = {}) {
      const chunkSizeBytes = writeOptions.chunkSizeBytes ?? defaultChunkSizeBytes;
      validateChunkSize(chunkSizeBytes);
      const filepartIds = [];
      const partSizes = [];
      for await (const chunk of chunkReadableStream(stream, chunkSizeBytes)) {
        if (chunk.length > MAX_FILE_PART_BYTES) {
          throw new Error(`File chunk exceeded the ${MAX_FILE_PART_BYTES}-byte BYTEA limit: ${chunk.length} bytes.`);
        }
        const part = await insertRow(options.fileParts, { [columns.data]: chunk }, writeOptions);
        if (typeof part.id !== "string") {
          throw new Error(`Inserted file part row is missing a string "id".`);
        }
        filepartIds.push(part.id);
        partSizes.push(chunk.length);
      }
      return insertRow(options.files, {
        [columns.mimeType]: writeOptions.mimeType ?? DEFAULT_MIME_TYPE,
        [columns.partIds]: filepartIds,
        [columns.partSizes]: partSizes,
        ...writeOptions.name !== void 0 ? { [columns.name]: writeOptions.name } : {}
      }, writeOptions);
    },
    async toStream(fileOrId, readOptions = {}) {
      const file = await loadFileRecord(fileOrId, readOptions);
      return createReadStream(file, readOptions);
    },
    async toBlob(fileOrId, readOptions = {}) {
      const file = await loadFileRecord(fileOrId, readOptions);
      const stream = createReadStream(file, readOptions);
      const reader = stream.getReader();
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        chunks.push(value);
      }
      return new Blob(chunks.map((chunk) => toBlobPart(chunk)), { type: file.mimeType });
    }
  };
  async function* chunkReadableStream(stream, chunkSizeBytes) {
    const reader = stream.getReader();
    const pending = [];
    let pendingBytes = 0;
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        const bytes = asUint8Array(value, "ReadableStream chunk must be binary data.");
        if (bytes.length === 0) {
          continue;
        }
        pending.push(bytes);
        pendingBytes += bytes.length;
        while (pendingBytes >= chunkSizeBytes) {
          yield takePendingBytes(pending, chunkSizeBytes);
          pendingBytes -= chunkSizeBytes;
        }
      }
      if (pendingBytes > 0) {
        yield takePendingBytes(pending, pendingBytes);
      }
    } finally {
      try {
        reader.releaseLock();
      } catch {
      }
    }
  }
  function takePendingBytes(pending, targetLength) {
    const out = new Uint8Array(targetLength);
    let offset = 0;
    while (offset < targetLength) {
      const current = pending[0];
      if (!current) {
        throw new Error("Chunking logic ran out of pending bytes.");
      }
      const remaining = targetLength - offset;
      const consume = Math.min(remaining, current.length);
      out.set(current.subarray(0, consume), offset);
      offset += consume;
      if (consume === current.length) {
        pending.shift();
      } else {
        pending[0] = current.subarray(consume);
      }
    }
    return out;
  }
  function normalizeFileRecord(file, names) {
    const id = file.id;
    if (typeof id !== "string") {
      throw new Error(`File row is missing a string "id".`);
    }
    const partIds = readStringArray(file[names.partIds], new IncompleteFileDataError(id, "invalid-file-record", `File "${id}" is incomplete: invalid "${names.partIds}" metadata.`));
    const partSizes = readIntegerArray(file[names.partSizes], new IncompleteFileDataError(id, "invalid-file-record", `File "${id}" is incomplete: invalid "${names.partSizes}" metadata.`));
    if (partIds.length !== partSizes.length) {
      throw new IncompleteFileDataError(id, "invalid-file-record", `File "${id}" is incomplete: "${names.partIds}" and "${names.partSizes}" lengths do not match.`);
    }
    return {
      id,
      name: typeof file[names.name] === "string" ? file[names.name] : void 0,
      mimeType: typeof file[names.mimeType] === "string" && file[names.mimeType].length > 0 ? file[names.mimeType] : DEFAULT_MIME_TYPE,
      partIds,
      partSizes
    };
  }
  function readStringArray(value, error) {
    if (!Array.isArray(value) || value.some((entry) => typeof entry !== "string")) {
      throw error;
    }
    return [...value];
  }
  function readIntegerArray(value, error) {
    if (!Array.isArray(value) || value.some((entry) => !Number.isInteger(entry) || entry < 0)) {
      throw error;
    }
    return value.map((entry) => Number(entry));
  }
  function asUint8Array(value, message) {
    if (value instanceof Uint8Array) {
      return value;
    }
    if (value instanceof ArrayBuffer) {
      return new Uint8Array(value);
    }
    if (ArrayBuffer.isView(value)) {
      return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    }
    if (Array.isArray(value)) {
      const numbers = value.map((entry) => {
        const n = Number(entry);
        if (!Number.isInteger(n) || n < 0 || n > 255) {
          throw new Error(message);
        }
        return n;
      });
      return Uint8Array.from(numbers);
    }
    throw new Error(message);
  }
  function toBlobPart(bytes) {
    const copy = new Uint8Array(bytes.byteLength);
    copy.set(bytes);
    return copy.buffer;
  }
  function getFileName(blob) {
    if (typeof File !== "undefined" && blob instanceof File) {
      return blob.name;
    }
    return void 0;
  }
}
function createConventionalFileStorage(db, app) {
  return createFileStorage(db, {
    files: app.files,
    fileParts: app.file_parts
  });
}
function validateChunkSize(chunkSizeBytes) {
  if (!Number.isInteger(chunkSizeBytes) || chunkSizeBytes <= 0) {
    throw new Error("chunkSizeBytes must be a positive integer.");
  }
  if (chunkSizeBytes > MAX_FILE_PART_BYTES) {
    throw new Error(`chunkSizeBytes must be <= ${MAX_FILE_PART_BYTES} bytes to fit inside a BYTEA file part.`);
  }
}
function toQueryOptions(readOptions) {
  if (!readOptions) {
    return void 0;
  }
  const { propagation, tier, visibility } = readOptions;
  if (propagation === void 0 && tier === void 0 && visibility === void 0) {
    return void 0;
  }
  return { propagation, tier, visibility };
}

// node_modules/jazz-tools/dist/runtime/leader-lock.js
function resolveNavigatorLocks() {
  const nav = globalThis.navigator;
  if (!nav || !nav.locks)
    return null;
  const locks = nav.locks;
  if (typeof locks.request !== "function")
    return null;
  return locks;
}
function createNavigatorLocksLeaderLockStrategy(lockManager = resolveNavigatorLocks()) {
  if (!lockManager)
    return null;
  return {
    async tryAcquire(lockName) {
      let resolveAcquired = null;
      const acquiredPromise = new Promise((resolve) => {
        resolveAcquired = resolve;
      });
      let releaseLock = null;
      const heldUntilReleased = new Promise((resolve) => {
        releaseLock = () => resolve();
      });
      void lockManager.request(lockName, { mode: "exclusive", ifAvailable: true }, async (lock) => {
        if (!lock) {
          resolveAcquired?.(null);
          resolveAcquired = null;
          return;
        }
        resolveAcquired?.({
          release: () => {
            if (!releaseLock)
              return;
            releaseLock();
            releaseLock = null;
          }
        });
        resolveAcquired = null;
        await heldUntilReleased;
      }).catch(() => {
        resolveAcquired?.(null);
        resolveAcquired = null;
      });
      return await acquiredPromise;
    }
  };
}

// node_modules/jazz-tools/dist/runtime/tab-leader-election.js
function randomTabId() {
  const cryptoObj = globalThis.crypto;
  if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
    return cryptoObj.randomUUID();
  }
  return `tab-${Math.random().toString(36).slice(2, 12)}`;
}
function compareTabIds(a, b) {
  if (a === b)
    return 0;
  return a < b ? -1 : 1;
}
function isMessage(value) {
  if (typeof value !== "object" || value === null)
    return false;
  const msg = value;
  if (msg.type === "leader-heartbeat") {
    return typeof msg.leaderTabId === "string" && typeof msg.term === "number" && typeof msg.sentAtMs === "number";
  }
  if (msg.type === "who-is-leader") {
    return typeof msg.requesterTabId === "string";
  }
  if (msg.type === "leader-claim") {
    return typeof msg.candidateTabId === "string" && typeof msg.term === "number" && typeof msg.sentAtMs === "number";
  }
  return false;
}
function resolveBroadcastChannelCtor() {
  const ctor = globalThis.BroadcastChannel;
  if (typeof ctor !== "function")
    return null;
  return ctor;
}
var TabLeaderElection = class {
  tabId;
  heartbeatMs;
  leaseMs;
  now;
  channelName;
  lockName;
  lockStrategy;
  started = false;
  channel = null;
  role = "follower";
  term = 0;
  leaderTabId = null;
  lastLeaderSeenAtMs = 0;
  heartbeatTimer = null;
  leaseDeadlineTimer = null;
  probeInFlight = false;
  leadershipLockLease = null;
  listeners = /* @__PURE__ */ new Set();
  readyResolve = null;
  readyReject = null;
  readyPromise;
  readySettled = false;
  onMessage = (event) => {
    this.handleIncomingMessage(event.data);
  };
  constructor(options) {
    this.tabId = options.tabId ?? randomTabId();
    this.heartbeatMs = Math.max(100, options.heartbeatMs ?? 1e3);
    this.leaseMs = Math.max(this.heartbeatMs * 2, options.leaseMs ?? 5e3);
    this.now = options.now ?? (() => Date.now());
    this.channelName = `jazz-leader:${options.appId}:${options.dbName}`;
    this.lockName = `jazz-leader-lock:${options.appId}:${options.dbName}`;
    this.lockStrategy = options.lockStrategy ?? createNavigatorLocksLeaderLockStrategy();
    this.readyPromise = new Promise((resolve, reject) => {
      this.readyResolve = resolve;
      this.readyReject = reject;
    });
  }
  start() {
    if (this.started)
      return;
    this.started = true;
    const ChannelCtor = resolveBroadcastChannelCtor();
    if (ChannelCtor) {
      this.channel = new ChannelCtor(this.channelName);
      this.channel.addEventListener("message", this.onMessage);
      this.requestCurrentLeader();
    }
    void this.tryTakeLeadership({ requestLeaderOnFailure: false });
    this.scheduleLeaseDeadlineCheck();
  }
  stop() {
    if (!this.started)
      return;
    this.started = false;
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    this.clearLeaseDeadlineTimer();
    this.releaseLeadershipLock();
    if (this.channel) {
      this.channel.removeEventListener("message", this.onMessage);
      this.channel.close();
      this.channel = null;
    }
    if (!this.readySettled && this.readyReject) {
      this.readyReject(new Error("Leader election stopped before initial leader was chosen"));
      this.readyReject = null;
      this.readyResolve = null;
      this.readySettled = true;
    }
  }
  onChange(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  snapshot() {
    return {
      role: this.role,
      tabId: this.tabId,
      leaderTabId: this.leaderTabId,
      term: this.term
    };
  }
  isLeader() {
    return this.role === "leader";
  }
  async waitForInitialLeader(timeoutMs = 2e3) {
    if (this.readySettled) {
      return this.snapshot();
    }
    return await Promise.race([
      this.readyPromise,
      new Promise((_resolve, reject) => {
        setTimeout(() => reject(new Error("Leader election timeout")), timeoutMs);
      })
    ]);
  }
  handleIncomingMessage(raw) {
    if (!isMessage(raw))
      return;
    switch (raw.type) {
      case "who-is-leader":
        if (this.role === "leader") {
          this.sendHeartbeat();
        }
        return;
      case "leader-heartbeat":
        this.handleLeaderHeartbeat(raw);
        return;
      case "leader-claim":
        this.handleLeaderClaim(raw);
        return;
    }
  }
  handleLeaderHeartbeat(message) {
    const shouldAdopt = message.term > this.term || message.term === this.term && (this.leaderTabId === null || message.leaderTabId === this.leaderTabId || compareTabIds(message.leaderTabId, this.leaderTabId) > 0);
    if (!shouldAdopt) {
      return;
    }
    this.setLeader(message.leaderTabId, message.term);
    this.lastLeaderSeenAtMs = this.now();
    this.scheduleLeaseDeadlineCheck();
  }
  handleLeaderClaim(message) {
    const shouldAdopt = message.term > this.term || message.term === this.term && (this.leaderTabId === null || compareTabIds(message.candidateTabId, this.leaderTabId) > 0);
    if (!shouldAdopt) {
      return;
    }
    this.setLeader(message.candidateTabId, message.term);
    this.lastLeaderSeenAtMs = this.now();
    this.scheduleLeaseDeadlineCheck();
  }
  promoteToLeader(nextTerm) {
    const electedTerm = Math.max(this.term + 1, nextTerm);
    this.setLeader(this.tabId, electedTerm);
    this.lastLeaderSeenAtMs = this.now();
    this.postMessage({
      type: "leader-claim",
      candidateTabId: this.tabId,
      term: electedTerm,
      sentAtMs: this.now()
    });
    this.sendHeartbeat();
  }
  setLeader(leaderTabId, term) {
    const prevLeader = this.leaderTabId;
    const prevRole = this.role;
    const prevTerm = this.term;
    const nextRole = leaderTabId === this.tabId ? "leader" : "follower";
    this.term = term;
    this.leaderTabId = leaderTabId;
    this.role = nextRole;
    if (this.role === "leader") {
      this.ensureHeartbeatTimer();
      this.clearLeaseDeadlineTimer();
    } else {
      if (prevRole === "leader") {
        this.releaseLeadershipLock();
      }
      this.clearHeartbeatTimer();
      this.scheduleLeaseDeadlineCheck();
    }
    this.resolveReadyIfNeeded();
    const changed = prevLeader !== leaderTabId || prevRole !== nextRole || prevTerm !== this.term;
    if (changed) {
      this.emitChange();
    }
  }
  ensureHeartbeatTimer() {
    if (this.heartbeatTimer)
      return;
    this.heartbeatTimer = setInterval(() => {
      this.sendHeartbeat();
    }, this.heartbeatMs);
  }
  clearHeartbeatTimer() {
    if (!this.heartbeatTimer)
      return;
    clearInterval(this.heartbeatTimer);
    this.heartbeatTimer = null;
  }
  scheduleLeaseDeadlineCheck() {
    if (!this.started || this.role === "leader") {
      this.clearLeaseDeadlineTimer();
      return;
    }
    const delayMs = this.leaderTabId ? Math.max(0, this.lastLeaderSeenAtMs + this.leaseMs - this.now()) : this.heartbeatMs;
    this.clearLeaseDeadlineTimer();
    this.leaseDeadlineTimer = setTimeout(() => {
      this.leaseDeadlineTimer = null;
      this.onLeaseDeadline();
    }, delayMs);
  }
  clearLeaseDeadlineTimer() {
    if (!this.leaseDeadlineTimer)
      return;
    clearTimeout(this.leaseDeadlineTimer);
    this.leaseDeadlineTimer = null;
  }
  onLeaseDeadline() {
    if (!this.started || this.role === "leader")
      return;
    if (!this.leaderTabId) {
      void this.tryTakeLeadership({ requestLeaderOnFailure: true });
      return;
    }
    const elapsed = this.now() - this.lastLeaderSeenAtMs;
    if (elapsed >= this.leaseMs) {
      void this.tryTakeLeadership({ requestLeaderOnFailure: true });
      return;
    }
    this.scheduleLeaseDeadlineCheck();
  }
  sendHeartbeat() {
    if (!this.started || this.role !== "leader")
      return;
    this.postMessage({
      type: "leader-heartbeat",
      leaderTabId: this.tabId,
      term: this.term,
      sentAtMs: this.now()
    });
  }
  postMessage(message) {
    this.channel?.postMessage(message);
  }
  requestCurrentLeader() {
    this.postMessage({
      type: "who-is-leader",
      requesterTabId: this.tabId
    });
  }
  async tryTakeLeadership(options) {
    if (!this.started || this.isLeader())
      return;
    if (this.probeInFlight)
      return;
    this.probeInFlight = true;
    try {
      const acquired = await this.tryAcquireLeadershipLock();
      if (!this.started || this.isLeader())
        return;
      if (acquired) {
        this.promoteToLeader(this.term + 1);
        return;
      }
      if (options.requestLeaderOnFailure) {
        this.requestCurrentLeader();
      }
      this.scheduleLeaseDeadlineCheck();
    } finally {
      this.probeInFlight = false;
    }
  }
  async tryAcquireLeadershipLock() {
    if (this.leadershipLockLease)
      return true;
    if (!this.lockStrategy)
      return false;
    const lease = await this.lockStrategy.tryAcquire(this.lockName);
    if (!lease)
      return false;
    this.leadershipLockLease = lease;
    return true;
  }
  releaseLeadershipLock() {
    const lease = this.leadershipLockLease;
    this.leadershipLockLease = null;
    lease?.release();
  }
  emitChange() {
    const snapshot = this.snapshot();
    for (const listener of this.listeners) {
      listener(snapshot);
    }
  }
  resolveReadyIfNeeded() {
    if (this.readySettled || !this.leaderTabId || !this.readyResolve)
      return;
    this.readySettled = true;
    this.readyResolve(this.snapshot());
    this.readyResolve = null;
    this.readyReject = null;
  }
};

// node_modules/jazz-tools/dist/runtime/db.js
var DEFAULT_WASM_LOG_LEVEL = "warn";
var STORAGE_RESET_REQUEST_RETRY_MS = 200;
var STORAGE_RESET_REQUEST_TIMEOUT_MS = 5e3;
var STORAGE_RESET_DISCOVERY_WINDOW_MS = 600;
var STORAGE_RESET_ACK_QUIET_MS = 150;
function setGlobalWasmLogLevel(level) {
  globalThis.__JAZZ_WASM_LOG_LEVEL = level ?? DEFAULT_WASM_LOG_LEVEL;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function createOperationId(prefix) {
  const cryptoObj = globalThis.crypto;
  if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
    return `${prefix}-${cryptoObj.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function toError(error, fallbackMessage) {
  return error instanceof Error ? error : new Error(error ? String(error) : fallbackMessage);
}
function resolveStorageDriver(driver) {
  return driver ?? { type: "persistent" };
}
function trimOptionalString(value) {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}
function resolveDefaultPersistentDbName(config) {
  const driver = resolveStorageDriver(config.driver);
  const explicitDbName = trimOptionalString((driver.type === "persistent" ? driver.dbName : void 0) ?? config.dbName);
  if (explicitDbName) {
    return explicitDbName;
  }
  const sessionUserId = resolveClientSessionSync({
    appId: config.appId,
    jwtToken: config.jwtToken
  })?.user_id;
  if (!sessionUserId) {
    return config.appId;
  }
  return `${config.appId}::${encodeURIComponent(sessionUserId)}`;
}
function createDeferred() {
  let resolve;
  let reject;
  const promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return { promise, resolve, reject };
}
function trimSubscriptionTraceStack(stack) {
  if (!stack) {
    return stack;
  }
  const lines = stack.split("\n");
  if (lines.length <= 1) {
    return stack;
  }
  const isInternalFrame = (line) => {
    return line.includes("Db.registerActiveQuerySubscriptionTrace") || line.includes("Db.subscribeAll") || line.includes("SubscriptionsOrchestrator.ensureEntryForKey") || line.includes("SubscriptionsOrchestrator.getCacheEntry") || line.includes("/node_modules/") || line.includes("react-dom") || line.includes("react_stack_bottom_frame");
  };
  const firstOriginIndex = lines.findIndex((line, index) => index > 0 && !isInternalFrame(line));
  if (firstOriginIndex <= 0) {
    return stack;
  }
  return [lines[0], ...lines.slice(firstOriginIndex)].join("\n");
}
function cloneActiveQuerySubscriptionTrace(trace) {
  return {
    ...trace,
    branches: [...trace.branches]
  };
}
function resolveHopOutputTable(schema2, startTable, hops) {
  if (hops.length === 0) {
    return startTable;
  }
  const relations = analyzeRelations(schema2);
  let currentTable = startTable;
  for (const hopName of hops) {
    const candidates = relations.get(currentTable) ?? [];
    const relation = candidates.find((candidate) => candidate.name === hopName);
    if (!relation) {
      throw new Error(`Unknown relation "${hopName}" on table "${currentTable}"`);
    }
    currentTable = relation.toTable;
  }
  return currentTable;
}
function resolveBuiltRelationOutputTable(schema2, relation) {
  if (relation.union) {
    const first = relation.union.inputs[0];
    if (!first) {
      throw new Error("union(...) requires at least one relation.");
    }
    const firstTable = resolveBuiltRelationOutputTable(schema2, first);
    for (const input of relation.union.inputs.slice(1)) {
      const inputTable = resolveBuiltRelationOutputTable(schema2, input);
      if (inputTable !== firstTable) {
        throw new Error("union(...) requires all relations to output the same table.");
      }
    }
    return firstTable;
  }
  const seedTable = relation.gather?.seed ? resolveBuiltRelationOutputTable(schema2, relation.gather.seed) : relation.table;
  if (!seedTable) {
    throw new Error("gather(...) seed relation is missing table metadata.");
  }
  const hops = relation.hops ?? [];
  return hops.length > 0 ? resolveHopOutputTable(schema2, seedTable, hops) : seedTable;
}
function resolveBuiltQueryOutputTable(schema2, builtQuery) {
  if (builtQuery.gather?.seed) {
    const gatherTable = resolveBuiltRelationOutputTable(schema2, builtQuery.gather.seed);
    return builtQuery.hops.length > 0 ? resolveHopOutputTable(schema2, gatherTable, builtQuery.hops) : gatherTable;
  }
  return builtQuery.hops.length > 0 ? resolveHopOutputTable(schema2, builtQuery.table, builtQuery.hops) : builtQuery.table;
}
function resolveSchemaWithTable(preferredSchema, fallbackSchema, tableName) {
  if (preferredSchema[tableName]) {
    return preferredSchema;
  }
  return typeof fallbackSchema === "function" ? fallbackSchema() : fallbackSchema;
}
function createRuntimeSchemaResolver(getRuntimeSchema) {
  let cachedRuntimeSchema;
  return {
    get: () => {
      if (!cachedRuntimeSchema) {
        cachedRuntimeSchema = getRuntimeSchema();
      }
      return cachedRuntimeSchema;
    },
    peek: () => cachedRuntimeSchema
  };
}
function assertTableBelongsToClient(table2, expectedClient, resolveClient, operation) {
  if (resolveClient(table2._schema) === expectedClient) {
    return;
  }
  throw new Error(`${operation} is bound to the client chosen at begin time and cannot be used with table "${table2._table}" from a different schema/client.`);
}
var DbPersistedWrite = class {
  pendingWrite;
  transformValue;
  loadBatchRecord;
  acknowledgeRejected;
  constructor(pendingWrite, transformValue, loadBatchRecord, acknowledgeRejected) {
    this.pendingWrite = pendingWrite;
    this.transformValue = transformValue;
    this.loadBatchRecord = loadBatchRecord;
    this.acknowledgeRejected = acknowledgeRejected;
  }
  batchId() {
    return this.pendingWrite.batchId();
  }
  value() {
    return this.transformValue(this.pendingWrite.value());
  }
  async wait() {
    return this.transformValue(await this.pendingWrite.wait());
  }
  localBatchRecord() {
    return this.loadBatchRecord();
  }
  acknowledgeRejectedBatch() {
    return this.acknowledgeRejected();
  }
};
var DbTransaction = class {
  client;
  runtimeTransaction;
  assertOwnsTable;
  committed = false;
  constructor(client, runtimeTransaction, assertOwnsTable) {
    this.client = client;
    this.runtimeTransaction = runtimeTransaction;
    this.assertOwnsTable = assertOwnsTable;
  }
  ensureActive() {
    if (this.committed) {
      throw new Error(`Transaction ${this.runtimeTransaction.batchId()} is already committed`);
    }
  }
  resolveInputSchema(table2) {
    this.assertOwnsTable(table2, "DbTransaction");
    return resolveSchemaWithTable(table2._schema, normalizeRuntimeSchema(this.client.getSchema()), table2._table);
  }
  assertOwnsQuery(query) {
    this.assertOwnsTable(query, "DbTransaction");
  }
  wrapPersistedWrite(pendingWrite, transformValue) {
    return new DbPersistedWrite(pendingWrite, transformValue, () => this.client.localBatchRecord(pendingWrite.batchId()), () => this.client.acknowledgeRejectedBatch(pendingWrite.batchId()));
  }
  batchId() {
    return this.runtimeTransaction.batchId();
  }
  commit() {
    if (this.committed) {
      return this.batchId();
    }
    const batchId = this.runtimeTransaction.commit();
    this.committed = true;
    return batchId;
  }
  insert(table2, data) {
    this.ensureActive();
    const values = toInsertRecord(data, this.resolveInputSchema(table2), table2._table);
    return this.runtimeTransaction.create(table2._table, values).mapValue((row) => transformRow(row, table2._schema, table2._table));
  }
  insertPersisted(table2, data, options) {
    this.ensureActive();
    const values = toInsertRecord(data, this.resolveInputSchema(table2), table2._table);
    const pendingWrite = this.runtimeTransaction.createPersisted(table2._table, values, options);
    return this.wrapPersistedWrite(pendingWrite, (row) => transformRow(row, table2._schema, table2._table));
  }
  update(table2, id, data) {
    this.ensureActive();
    const updates = toUpdateRecord(data, this.resolveInputSchema(table2), table2._table);
    return this.runtimeTransaction.update(id, updates);
  }
  updatePersisted(table2, id, data, options) {
    this.ensureActive();
    const updates = toUpdateRecord(data, this.resolveInputSchema(table2), table2._table);
    const pendingWrite = this.runtimeTransaction.updatePersisted(id, updates, options);
    return this.wrapPersistedWrite(pendingWrite, () => void 0);
  }
  delete(table2, id) {
    this.ensureActive();
    this.assertOwnsTable(table2, "DbTransaction");
    return this.runtimeTransaction.delete(id);
  }
  deletePersisted(table2, id, options) {
    this.ensureActive();
    this.assertOwnsTable(table2, "DbTransaction");
    const pendingWrite = this.runtimeTransaction.deletePersisted(id, options);
    return this.wrapPersistedWrite(pendingWrite, () => void 0);
  }
  async all(query, options) {
    this.ensureActive();
    this.assertOwnsQuery(query);
    const runtimeSchema = normalizeRuntimeSchema(this.client.getSchema());
    const builderJson = query._build();
    const builtQuery = normalizeBuiltQuery(JSON.parse(builderJson), query._table);
    const planningSchema = resolveSchemaWithTable(query._schema, runtimeSchema, builtQuery.table);
    const outputTable = resolveBuiltQueryOutputTable(planningSchema, builtQuery);
    const outputSchema = resolveSchemaWithTable(query._schema, runtimeSchema, outputTable);
    const rows = await this.runtimeTransaction.query(translateQuery(builderJson, planningSchema), options);
    const outputIncludes = outputTable !== builtQuery.table ? {} : builtQuery.includes;
    return transformRows(rows, outputSchema, outputTable, outputIncludes, builtQuery.select);
  }
  async one(query, options) {
    const results = await this.all(query, options);
    return results[0] ?? null;
  }
  localBatchRecord(batchId = this.batchId()) {
    return this.runtimeTransaction.localBatchRecord(batchId);
  }
  localBatchRecords() {
    return this.runtimeTransaction.localBatchRecords();
  }
  acknowledgeRejectedBatch(batchId = this.batchId()) {
    return this.runtimeTransaction.acknowledgeRejectedBatch(batchId);
  }
};
var DbDirectBatch = class {
  client;
  runtimeBatch;
  assertOwnsTable;
  constructor(client, runtimeBatch, assertOwnsTable) {
    this.client = client;
    this.runtimeBatch = runtimeBatch;
    this.assertOwnsTable = assertOwnsTable;
  }
  resolveInputSchema(table2) {
    this.assertOwnsTable(table2, "DbDirectBatch");
    return resolveSchemaWithTable(table2._schema, normalizeRuntimeSchema(this.client.getSchema()), table2._table);
  }
  wrapPersistedWrite(pendingWrite, transformValue) {
    return new DbPersistedWrite(pendingWrite, transformValue, () => this.client.localBatchRecord(pendingWrite.batchId()), () => this.client.acknowledgeRejectedBatch(pendingWrite.batchId()));
  }
  batchId() {
    return this.runtimeBatch.batchId();
  }
  insert(table2, data) {
    const values = toInsertRecord(data, this.resolveInputSchema(table2), table2._table);
    return this.runtimeBatch.create(table2._table, values).mapValue((row) => transformRow(row, table2._schema, table2._table));
  }
  insertPersisted(table2, data, options) {
    const values = toInsertRecord(data, this.resolveInputSchema(table2), table2._table);
    const pendingWrite = this.runtimeBatch.createPersisted(table2._table, values, options);
    return this.wrapPersistedWrite(pendingWrite, (row) => transformRow(row, table2._schema, table2._table));
  }
  update(table2, id, data) {
    const updates = toUpdateRecord(data, this.resolveInputSchema(table2), table2._table);
    return this.runtimeBatch.update(id, updates);
  }
  updatePersisted(table2, id, data, options) {
    const updates = toUpdateRecord(data, this.resolveInputSchema(table2), table2._table);
    const pendingWrite = this.runtimeBatch.updatePersisted(id, updates, options);
    return this.wrapPersistedWrite(pendingWrite, () => void 0);
  }
  delete(table2, id) {
    this.assertOwnsTable(table2, "DbDirectBatch");
    return this.runtimeBatch.delete(id);
  }
  deletePersisted(table2, id, options) {
    this.assertOwnsTable(table2, "DbDirectBatch");
    const pendingWrite = this.runtimeBatch.deletePersisted(id, options);
    return this.wrapPersistedWrite(pendingWrite, () => void 0);
  }
  localBatchRecord(batchId = this.batchId()) {
    return this.runtimeBatch.localBatchRecord(batchId);
  }
  localBatchRecords() {
    return this.runtimeBatch.localBatchRecords();
  }
  acknowledgeRejectedBatch(batchId = this.batchId()) {
    return this.runtimeBatch.acknowledgeRejectedBatch(batchId);
  }
};
function resolveBroadcastChannelCtor2() {
  const ctor = globalThis.BroadcastChannel;
  if (typeof ctor !== "function")
    return null;
  return ctor;
}
function isBinaryPayloadArray(value) {
  return Array.isArray(value) && value.every((entry) => entry instanceof Uint8Array);
}
function isTabSyncMessage(value) {
  if (typeof value !== "object" || value === null)
    return false;
  const message = value;
  if (message.type === "follower-sync") {
    return typeof message.fromTabId === "string" && typeof message.toLeaderTabId === "string" && typeof message.term === "number" && isBinaryPayloadArray(message.payload);
  }
  if (message.type === "leader-sync") {
    return typeof message.fromLeaderTabId === "string" && typeof message.toTabId === "string" && typeof message.term === "number" && isBinaryPayloadArray(message.payload);
  }
  if (message.type === "follower-close") {
    return typeof message.fromTabId === "string" && typeof message.toLeaderTabId === "string" && typeof message.term === "number";
  }
  if (message.type === "storage-reset-request") {
    return typeof message.requestId === "string" && typeof message.fromTabId === "string" && (typeof message.toLeaderTabId === "string" || message.toLeaderTabId === null) && typeof message.term === "number";
  }
  if (message.type === "storage-reset-begin") {
    return typeof message.requestId === "string" && typeof message.coordinatorTabId === "string" && typeof message.term === "number";
  }
  if (message.type === "storage-reset-ack") {
    return typeof message.requestId === "string" && typeof message.fromTabId === "string" && typeof message.namespace === "string";
  }
  if (message.type === "storage-reset-finished") {
    return typeof message.requestId === "string" && typeof message.success === "boolean" && (typeof message.errorMessage === "string" || message.errorMessage === void 0);
  }
  return false;
}
function isLeaderDebugEnabled() {
  const globalFlag = globalThis.__JAZZ_LEADER_DEBUG__;
  if (globalFlag === true)
    return true;
  try {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("jazz:leader-debug") === "1";
    }
  } catch {
  }
  return false;
}
var Db = class _Db {
  clients = /* @__PURE__ */ new Map();
  config;
  wasmModule;
  authStateStore;
  workerBridge = null;
  worker = null;
  bridgeReady = null;
  primaryDbName = null;
  workerDbName = null;
  leaderElection = null;
  leaderElectionUnsubscribe = null;
  tabRole = "follower";
  tabId = null;
  currentLeaderTabId = null;
  currentLeaderTerm = 0;
  syncChannel = null;
  leaderPeerIds = /* @__PURE__ */ new Set();
  activeRemoteLeaderTabId = null;
  workerReconfigure = Promise.resolve();
  activeStorageReset = null;
  storageResetCoordinator = null;
  _localFirstSecret = null;
  localFirstRefreshTimer = null;
  isShuttingDown = false;
  lifecycleHooksAttached = false;
  activeQuerySubscriptionTraces = /* @__PURE__ */ new Map();
  activeQuerySubscriptionTraceListeners = /* @__PURE__ */ new Set();
  /**
   * Listeners attached with {@link Db.onMutationError} that are notified when a write operation
   * (insert, update, delete) is rejected. Errors from all {@link Db.clients} (including those
   * added after the listeners are attached) are forwarded to all Db listeners.
   */
  mutationErrorListeners = /* @__PURE__ */ new Set();
  /**
   * Unsubscribers for {@link Db.clients}'s {@link JazzClient.onMutationError} listeners
   */
  clientMutationErrorUnsubscribers = /* @__PURE__ */ new Map();
  nextActiveQuerySubscriptionTraceId = 1;
  onSyncChannelMessage = (event) => {
    this.handleSyncChannelMessage(event.data);
  };
  onVisibilityChange = () => {
    if (typeof document === "undefined")
      return;
    const hidden = document.visibilityState === "hidden";
    this.sendLifecycleHint(hidden ? "visibility-hidden" : "visibility-visible");
  };
  onPageHide = () => {
    this.sendLifecycleHint("pagehide");
  };
  onPageFreeze = () => {
    this.sendLifecycleHint("freeze");
  };
  onPageResume = () => {
    this.sendLifecycleHint("resume");
  };
  /**
   * Protected constructor - use createDb() in regular app code.
   */
  constructor(config, wasmModule2, authStateOptions) {
    this.config = config;
    this.wasmModule = wasmModule2;
    this.authStateStore = createAuthStateStore(config, authStateOptions);
  }
  /** @internal Store the seed used for local-first auth and schedule token refresh. */
  initLocalFirstAuth(seed, ttlSeconds) {
    this._localFirstSecret = seed;
    this.scheduleLocalFirstRefresh(ttlSeconds);
  }
  scheduleLocalFirstRefresh(ttlSeconds) {
    if (this.localFirstRefreshTimer) {
      clearTimeout(this.localFirstRefreshTimer);
    }
    const refreshMs = ttlSeconds * 800;
    this.localFirstRefreshTimer = setTimeout(() => {
      this.refreshLocalFirstToken();
    }, refreshMs);
  }
  refreshLocalFirstToken() {
    if (!this._localFirstSecret || this.isShuttingDown)
      return;
    try {
      const wasmModule2 = this.wasmModule;
      if (!wasmModule2)
        return;
      const ttlSeconds = 3600;
      const nowSeconds = BigInt(Math.floor(Date.now() / 1e3));
      const newToken = wasmModule2.WasmRuntime.mintJazzSelfSignedToken(this._localFirstSecret, "urn:jazz:local-first", this.config.appId, BigInt(ttlSeconds), nowSeconds);
      this.updateAuthToken(newToken);
      this.scheduleLocalFirstRefresh(ttlSeconds);
    } catch (e) {
      console.error("Failed to refresh local-first token:", e);
    }
  }
  markUnauthenticated(reason) {
    this.authStateStore.markUnauthenticated(reason);
  }
  applyAuthUpdate(token) {
    const jwtToken = token ?? void 0;
    const previousToken = this.config.jwtToken;
    const previousState = this.authStateStore.getState();
    const nextState = this.authStateStore.applyJwtToken(jwtToken);
    const tokenChanged = previousToken !== jwtToken;
    if (!tokenChanged && nextState === previousState) {
      return false;
    }
    this.config.jwtToken = jwtToken;
    for (const client of this.clients.values()) {
      client.updateAuthToken(jwtToken);
    }
    this.workerBridge?.updateAuth({
      jwtToken
    });
    return true;
  }
  applyCookieSessionUpdate(session) {
    const cookieSession = session ?? void 0;
    const previousSession = this.config.cookieSession;
    const previousState = this.authStateStore.getState();
    const nextState = this.authStateStore.applyCookieSession(cookieSession);
    const sessionChanged = JSON.stringify(previousSession) !== JSON.stringify(cookieSession);
    if (!sessionChanged && nextState === previousState) {
      return false;
    }
    this.config.cookieSession = cookieSession;
    for (const client of this.clients.values()) {
      client.updateCookieSession(cookieSession);
    }
    this.workerBridge?.updateAuth({
      jwtToken: this.config.jwtToken
    });
    return true;
  }
  /**
   * Create a Db instance with pre-loaded WASM module.
   * @internal Use createDb() instead.
   */
  static async create(config) {
    const wasmModule2 = await loadWasmModule(config.runtimeSources);
    return new _Db(config, wasmModule2);
  }
  /**
   * Create a Db instance backed by a dedicated worker with OPFS persistence.
   *
   * The main thread runs an in-memory WASM runtime.
   * The worker runs a persistent WASM runtime (OPFS).
   * WorkerBridge wires them together via postMessage.
   *
   * @internal Use createDb() instead — it auto-detects browser.
   */
  static async createWithWorker(config) {
    const wasmModule2 = await loadWasmModule(config.runtimeSources);
    const db = new _Db(config, wasmModule2);
    const persistentDriver = resolveStorageDriver(config.driver);
    if (persistentDriver.type !== "persistent") {
      throw new Error("Worker-backed Db requires driver.type='persistent'");
    }
    db.primaryDbName = resolveDefaultPersistentDbName(config);
    db.workerDbName = db.primaryDbName;
    try {
      const election = new TabLeaderElection({
        appId: config.appId,
        dbName: db.primaryDbName
      });
      db.leaderElection = election;
      election.start();
      let initialLeader = null;
      try {
        initialLeader = await election.waitForInitialLeader(1600);
      } catch {
        initialLeader = election.snapshot();
      }
      db.adoptLeaderSnapshot(initialLeader);
      db.workerDbName = _Db.resolveWorkerDbNameForSnapshot(db.primaryDbName, initialLeader);
      db.logLeaderDebug("initial-election");
      db.openSyncChannel();
      db.attachLifecycleHooks();
      db.leaderElectionUnsubscribe = election.onChange((snapshot) => {
        db.onLeaderElectionChange(snapshot);
      });
      db.worker = await _Db.spawnWorker(config.runtimeSources);
      return db;
    } catch (error) {
      db.closeSyncChannel();
      db.detachLifecycleHooks();
      if (db.leaderElectionUnsubscribe) {
        db.leaderElectionUnsubscribe();
        db.leaderElectionUnsubscribe = null;
      }
      if (db.leaderElection) {
        db.leaderElection.stop();
        db.leaderElection = null;
      }
      throw error;
    }
  }
  /**
   * Get or create a JazzClient for the given schema.
   * Synchronous because WASM module is pre-loaded.
   *
   * In worker mode, the first call per schema also initializes the
   * WorkerBridge (async). Subsequent calls are sync.
   */
  getClient(schema2) {
    if (!this.wasmModule) {
      throw new Error("Db runtime module is not initialized for this Db implementation");
    }
    const key = serializeRuntimeSchema(schema2);
    if (!this.clients.has(key)) {
      setGlobalWasmLogLevel(this.config.logLevel);
      const client = JazzClient.connectSync(this.wasmModule, {
        appId: this.config.appId,
        schema: schema2,
        driver: this.config.driver,
        // In worker mode, don't connect to server directly — worker handles it
        serverUrl: this.worker ? void 0 : this.config.serverUrl,
        env: this.config.env,
        userBranch: this.config.userBranch,
        jwtToken: this.config.jwtToken,
        cookieSession: this.config.cookieSession,
        adminSecret: this.config.adminSecret,
        tier: this.worker ? void 0 : "local",
        // Keep worker-bridged browser clients on local durability by default.
        // For direct (non-worker) clients connected to a server, default to edge.
        defaultDurabilityTier: this.worker ? void 0 : this.config.serverUrl ? "edge" : void 0
      }, {
        // Worker-bridged runtimes exchange postcard payloads with peers;
        // direct browser/server routing keeps JSON payloads.
        useBinaryEncoding: this.worker !== null,
        onAuthFailure: (reason) => {
          this.markUnauthenticated(reason);
        }
      });
      if (this.worker && !this.workerBridge) {
        this.attachWorkerBridge(key, client);
      }
      this.attachMutationErrorHandler(client);
      if (!this.worker && this.config.serverUrl) {
        client.connectTransport(this.config.serverUrl, {
          jwt_token: this.config.jwtToken,
          admin_secret: this.config.adminSecret
        });
      }
      this.attachMutationErrorHandler(client);
      this.clients.set(key, client);
    }
    return this.clients.get(key);
  }
  /**
   * Attaches a mutation error handler to the given client, ensuring all listeners in
   * {@link Db.mutationErrorListeners} are notified.
   */
  attachMutationErrorHandler(client) {
    if (this.mutationErrorListeners.size === 0) {
      return;
    }
    if (this.clientMutationErrorUnsubscribers.has(client)) {
      return;
    }
    this.clientMutationErrorUnsubscribers.set(client, client.onMutationError((event) => {
      for (const listener of this.mutationErrorListeners) {
        listener(event);
      }
    }));
  }
  /**
   * Wait for the worker bridge to be initialized (if in worker mode).
   * No-op if not using a worker.
   */
  async ensureBridgeReady() {
    await this.workerReconfigure;
    if (this.bridgeReady) {
      await this.bridgeReady;
    }
  }
  async ensureQueryReady(options) {
    await this.ensureBridgeReady();
    if (!this.workerBridge || !this.config.serverUrl) {
      return;
    }
    if (!options?.tier || options.tier === "local") {
      return;
    }
    await this.workerBridge.waitForUpstreamServerConnection();
  }
  attachWorkerBridge(schemaJson, client) {
    if (!this.worker) {
      throw new Error("Cannot attach worker bridge without an active worker");
    }
    const bridge = new WorkerBridge(this.worker, client.getRuntime());
    this.leaderPeerIds.clear();
    bridge.onPeerSync((batch) => {
      this.handleWorkerPeerSync(batch);
    });
    this.applyBridgeRoutingForCurrentLeader(bridge, false);
    bridge.onAuthFailure((reason) => {
      this.markUnauthenticated(reason);
    });
    this.workerBridge = bridge;
    const bridgeReady = bridge.init(this.buildWorkerBridgeOptions(schemaJson)).then(() => void 0);
    bridgeReady.catch(() => void 0);
    this.bridgeReady = bridgeReady;
  }
  buildWorkerBridgeOptions(schemaJson) {
    const driver = resolveStorageDriver(this.config.driver);
    if (driver.type !== "persistent") {
      throw new Error("Worker bridge is only available for driver.type='persistent'");
    }
    const runtimeSources = this.config.runtimeSources;
    let fallbackWasmUrl;
    if (!runtimeSources?.workerUrl && !runtimeSources?.baseUrl && !runtimeSources?.wasmUrl) {
      const locationHref = typeof location !== "undefined" ? location.href : void 0;
      if (!resolveRuntimeConfigSyncInitInput(runtimeSources)) {
        fallbackWasmUrl = resolveWorkerBootstrapWasmUrl(import.meta.url, locationHref, runtimeSources) ?? void 0;
      }
    }
    return {
      schemaJson,
      appId: this.config.appId,
      env: this.config.env ?? "dev",
      userBranch: this.config.userBranch ?? "main",
      dbName: this.workerDbName ?? driver.dbName ?? this.config.appId,
      serverUrl: this.config.serverUrl,
      jwtToken: this.config.jwtToken,
      adminSecret: this.config.adminSecret,
      runtimeSources: this.config.runtimeSources,
      fallbackWasmUrl,
      logLevel: this.config.logLevel
    };
  }
  adoptLeaderSnapshot(snapshot) {
    this.tabRole = snapshot.role;
    this.tabId = snapshot.tabId;
    this.currentLeaderTabId = snapshot.leaderTabId;
    this.currentLeaderTerm = snapshot.term;
  }
  openSyncChannel() {
    if (this.syncChannel || !this.primaryDbName)
      return;
    const ChannelCtor = resolveBroadcastChannelCtor2();
    if (!ChannelCtor) {
      this.logLeaderDebug("sync-channel-unavailable");
      return;
    }
    const channelName = `jazz-tab-sync:${this.config.appId}:${this.primaryDbName}`;
    this.syncChannel = new ChannelCtor(channelName);
    this.syncChannel.addEventListener("message", this.onSyncChannelMessage);
    this.logLeaderDebug("sync-channel-open", {
      channelName
    });
  }
  closeSyncChannel() {
    if (!this.syncChannel)
      return;
    this.syncChannel.removeEventListener("message", this.onSyncChannelMessage);
    this.syncChannel.close();
    this.syncChannel = null;
    this.logLeaderDebug("sync-channel-close");
  }
  postSyncChannelMessage(message) {
    this.syncChannel?.postMessage(message);
  }
  getOrCreateStorageResetContext(requestId, initiatedBySelf) {
    if (this.activeStorageReset?.requestId === requestId) {
      if (initiatedBySelf) {
        this.activeStorageReset.initiatedBySelf = true;
      }
      return this.activeStorageReset;
    }
    const completion = createDeferred();
    void completion.promise.catch(() => void 0);
    const context = {
      requestId,
      initiatedBySelf,
      coordinatorTabId: null,
      begun: false,
      completed: false,
      preparePromise: null,
      completion
    };
    this.activeStorageReset = context;
    return context;
  }
  clearStorageResetContext(requestId) {
    if (this.activeStorageReset?.requestId === requestId) {
      this.activeStorageReset = null;
    }
    if (this.storageResetCoordinator?.requestId === requestId) {
      this.storageResetCoordinator = null;
    }
  }
  resolveStorageResetContext(context) {
    if (context.completed) {
      return;
    }
    context.completed = true;
    context.completion.resolve();
    this.clearStorageResetContext(context.requestId);
  }
  rejectStorageResetContext(context, error) {
    if (context.completed) {
      return;
    }
    context.completed = true;
    context.completion.reject(toError(error, "Browser storage reset failed"));
    this.clearStorageResetContext(context.requestId);
  }
  async prepareForStorageReset(context, coordinatorTabId) {
    if (context.preparePromise) {
      return await context.preparePromise;
    }
    context.begun = true;
    context.coordinatorTabId = coordinatorTabId;
    context.preparePromise = (async () => {
      if (this.bridgeReady) {
        await this.bridgeReady;
      }
      const namespace = this.currentWorkerNamespace();
      await this.shutdownWorkerAndClientsForStorageReset();
      if (this.tabId && coordinatorTabId !== this.tabId) {
        this.postSyncChannelMessage({
          type: "storage-reset-ack",
          requestId: context.requestId,
          fromTabId: this.tabId,
          namespace
        });
      }
      return namespace;
    })();
    return await context.preparePromise;
  }
  async waitForStorageResetQuiescence(coordinator) {
    while (true) {
      const now = Date.now();
      const elapsed = now - coordinator.startedAtMs;
      const idleMs = now - coordinator.lastAckAtMs;
      if (elapsed >= STORAGE_RESET_DISCOVERY_WINDOW_MS && idleMs >= STORAGE_RESET_ACK_QUIET_MS) {
        return;
      }
      await sleep(25);
    }
  }
  async collectStorageResetNamespaces(extraNamespaces) {
    const namespaces = /* @__PURE__ */ new Set();
    const primaryDbName = this.primaryDbName;
    if (primaryDbName) {
      namespaces.add(primaryDbName);
    }
    for (const namespace of extraNamespaces) {
      namespaces.add(namespace);
    }
    if (!primaryDbName) {
      return [...namespaces];
    }
    const rootDirectory = await navigator.storage.getDirectory();
    const rootWithEntries = rootDirectory;
    if (typeof rootWithEntries.entries !== "function") {
      return [...namespaces];
    }
    const suffix = ".opfsbtree";
    const fallbackPrefix = `${primaryDbName}__fallback__`;
    for await (const [name] of rootWithEntries.entries()) {
      if (!name.endsWith(suffix))
        continue;
      const namespace = name.slice(0, -suffix.length);
      if (namespace === primaryDbName || namespace.startsWith(fallbackPrefix)) {
        namespaces.add(namespace);
      }
    }
    return [...namespaces];
  }
  async resumeAfterStorageReset() {
    if (this.worker || this.isShuttingDown) {
      return;
    }
    this.worker = await _Db.spawnWorker(this.config.runtimeSources);
  }
  async runSingleTabStorageReset(context) {
    const coordinatorTabId = this.tabId ?? "single-tab-reset";
    let resultError = null;
    try {
      const namespace = await this.prepareForStorageReset(context, coordinatorTabId);
      const namespaces = await this.collectStorageResetNamespaces([namespace]);
      for (const candidate of namespaces) {
        await this.removeOpfsNamespaceFile(candidate);
      }
    } catch (error) {
      resultError = toError(error, "Browser storage reset failed");
    }
    try {
      await this.resumeAfterStorageReset();
    } catch (error) {
      if (!resultError) {
        resultError = toError(error, "Failed to restart browser worker after storage reset");
      }
    }
    if (resultError) {
      throw resultError;
    }
  }
  async startStorageResetAsCoordinator(context) {
    if (this.storageResetCoordinator?.requestId === context.requestId) {
      return await (this.storageResetCoordinator.runPromise ?? context.completion.promise);
    }
    if (!this.tabId || this.tabRole !== "leader") {
      throw new Error("Storage reset coordination requires the current tab to be the leader.");
    }
    const coordinator = {
      requestId: context.requestId,
      startedAtMs: Date.now(),
      lastAckAtMs: Date.now(),
      ackedNamespacesByTabId: /* @__PURE__ */ new Map(),
      runPromise: null
    };
    this.storageResetCoordinator = coordinator;
    coordinator.runPromise = (async () => {
      let resultError = null;
      try {
        this.postSyncChannelMessage({
          type: "storage-reset-begin",
          requestId: context.requestId,
          coordinatorTabId: this.tabId,
          term: this.currentLeaderTerm
        });
        const localNamespace = await this.prepareForStorageReset(context, this.tabId);
        coordinator.ackedNamespacesByTabId.set(this.tabId, localNamespace);
        coordinator.lastAckAtMs = Date.now();
        await this.waitForStorageResetQuiescence(coordinator);
        const namespaces = await this.collectStorageResetNamespaces(coordinator.ackedNamespacesByTabId.values());
        for (const namespace of namespaces) {
          await this.removeOpfsNamespaceFile(namespace);
        }
      } catch (error) {
        resultError = toError(error, "Browser storage reset failed");
      }
      try {
        await this.resumeAfterStorageReset();
      } catch (error) {
        if (!resultError) {
          resultError = toError(error, "Failed to restart browser worker after storage reset");
        }
      }
      this.postSyncChannelMessage({
        type: "storage-reset-finished",
        requestId: context.requestId,
        success: resultError === null,
        ...resultError ? { errorMessage: resultError.message } : {}
      });
      if (resultError) {
        throw resultError;
      }
    })().then(() => {
      this.resolveStorageResetContext(context);
    }).catch((error) => {
      this.rejectStorageResetContext(context, error);
    }).finally(() => {
      if (this.storageResetCoordinator?.requestId === context.requestId) {
        this.storageResetCoordinator = null;
      }
    });
    await coordinator.runPromise;
  }
  async requestCoordinatedStorageReset() {
    if (!this.syncChannel || !this.tabId) {
      const requestId2 = createOperationId("storage-reset");
      const context2 = this.getOrCreateStorageResetContext(requestId2, true);
      try {
        await this.runSingleTabStorageReset(context2);
        this.resolveStorageResetContext(context2);
      } catch (error) {
        this.rejectStorageResetContext(context2, error);
      }
      await context2.completion.promise;
      return;
    }
    if (this.activeStorageReset) {
      await this.activeStorageReset.completion.promise;
      return;
    }
    const requestId = createOperationId("storage-reset");
    const context = this.getOrCreateStorageResetContext(requestId, true);
    if (this.tabRole === "leader") {
      await this.startStorageResetAsCoordinator(context);
      return;
    }
    const deadline = Date.now() + STORAGE_RESET_REQUEST_TIMEOUT_MS;
    while (!context.begun) {
      if (this.tabRole === "leader") {
        await this.startStorageResetAsCoordinator(context);
        return;
      }
      this.postSyncChannelMessage({
        type: "storage-reset-request",
        requestId,
        fromTabId: this.tabId,
        toLeaderTabId: this.currentLeaderTabId,
        term: this.currentLeaderTerm
      });
      const settled = await Promise.race([
        context.completion.promise.then(() => true, () => true),
        sleep(STORAGE_RESET_REQUEST_RETRY_MS).then(() => false)
      ]);
      if (settled) {
        await context.completion.promise;
        return;
      }
      if (Date.now() >= deadline) {
        const error = new Error("Timed out waiting for the leader tab to begin browser storage reset.");
        this.rejectStorageResetContext(context, error);
        throw error;
      }
    }
    await context.completion.promise;
  }
  attachLifecycleHooks() {
    if (this.lifecycleHooksAttached)
      return;
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    window.addEventListener("pagehide", this.onPageHide);
    document.addEventListener("freeze", this.onPageFreeze);
    document.addEventListener("resume", this.onPageResume);
    this.lifecycleHooksAttached = true;
  }
  detachLifecycleHooks() {
    if (!this.lifecycleHooksAttached)
      return;
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    document.removeEventListener("visibilitychange", this.onVisibilityChange);
    window.removeEventListener("pagehide", this.onPageHide);
    document.removeEventListener("freeze", this.onPageFreeze);
    document.removeEventListener("resume", this.onPageResume);
    this.lifecycleHooksAttached = false;
  }
  sendLifecycleHint(event) {
    if (this.isShuttingDown || !this.worker)
      return;
    this.logLeaderDebug("lifecycle-hint", { event });
    if (this.workerBridge) {
      this.workerBridge.sendLifecycleHint(event);
      return;
    }
    this.worker.postMessage({
      type: "lifecycle-hint",
      event,
      sentAtMs: Date.now()
    });
  }
  logLeaderDebug(event, extra) {
    if (!isLeaderDebugEnabled())
      return;
    console.info("[db:leader]", event, {
      tabId: this.tabId,
      role: this.tabRole,
      term: this.currentLeaderTerm,
      leaderTabId: this.currentLeaderTabId,
      workerDbName: this.workerDbName,
      ...extra
    });
  }
  handleSyncChannelMessage(raw) {
    if (this.isShuttingDown || !this.tabId)
      return;
    if (!isTabSyncMessage(raw))
      return;
    switch (raw.type) {
      case "storage-reset-request":
        this.handleStorageResetRequest(raw);
        return;
      case "storage-reset-begin":
        this.handleStorageResetBegin(raw);
        return;
      case "storage-reset-ack":
        this.handleStorageResetAck(raw);
        return;
      case "storage-reset-finished":
        this.handleStorageResetFinished(raw);
        return;
      case "follower-sync":
        this.handleFollowerSync(raw);
        return;
      case "leader-sync":
        this.handleLeaderSync(raw);
        return;
      case "follower-close":
        this.handleFollowerClose(raw);
        return;
    }
  }
  handleStorageResetRequest(message) {
    if (this.tabRole !== "leader")
      return;
    if (!this.tabId)
      return;
    if (message.fromTabId === this.tabId)
      return;
    if (message.toLeaderTabId && message.toLeaderTabId !== this.tabId)
      return;
    if (message.term !== this.currentLeaderTerm)
      return;
    if (this.activeStorageReset && this.activeStorageReset.requestId !== message.requestId)
      return;
    const context = this.getOrCreateStorageResetContext(message.requestId, false);
    void this.startStorageResetAsCoordinator(context).catch(() => void 0);
  }
  handleStorageResetBegin(message) {
    if (!this.currentLeaderTabId)
      return;
    if (message.coordinatorTabId !== this.currentLeaderTabId)
      return;
    if (message.term !== this.currentLeaderTerm)
      return;
    if (message.coordinatorTabId === this.tabId)
      return;
    if (this.activeStorageReset && this.activeStorageReset.requestId !== message.requestId)
      return;
    const context = this.getOrCreateStorageResetContext(message.requestId, false);
    context.begun = true;
    context.coordinatorTabId = message.coordinatorTabId;
    void this.prepareForStorageReset(context, message.coordinatorTabId).catch((error) => {
      this.rejectStorageResetContext(context, error);
    });
  }
  handleStorageResetAck(message) {
    const coordinator = this.storageResetCoordinator;
    if (!coordinator || coordinator.requestId !== message.requestId)
      return;
    coordinator.ackedNamespacesByTabId.set(message.fromTabId, message.namespace);
    coordinator.lastAckAtMs = Date.now();
  }
  handleStorageResetFinished(message) {
    const context = this.activeStorageReset;
    if (!context || context.requestId !== message.requestId || context.completed)
      return;
    void (async () => {
      let resultError = message.success ? null : new Error(message.errorMessage ?? "Browser storage reset failed");
      try {
        await this.resumeAfterStorageReset();
      } catch (error) {
        if (!resultError) {
          resultError = toError(error, "Failed to restart browser worker after storage reset");
        }
      }
      if (resultError) {
        this.rejectStorageResetContext(context, resultError);
      } else {
        this.resolveStorageResetContext(context);
      }
    })();
  }
  handleFollowerSync(message) {
    if (this.tabRole !== "leader")
      return;
    if (!this.workerBridge)
      return;
    if (!this.tabId || message.toLeaderTabId !== this.tabId)
      return;
    if (message.term !== this.currentLeaderTerm)
      return;
    if (!this.leaderPeerIds.has(message.fromTabId)) {
      this.leaderPeerIds.add(message.fromTabId);
      this.workerBridge.openPeer(message.fromTabId);
      this.logLeaderDebug("peer-open", {
        peerId: message.fromTabId
      });
    }
    this.workerBridge.sendPeerSync(message.fromTabId, message.term, message.payload);
  }
  handleLeaderSync(message) {
    if (this.tabRole !== "follower")
      return;
    if (!this.workerBridge)
      return;
    if (!this.tabId || message.toTabId !== this.tabId)
      return;
    if (!this.currentLeaderTabId || message.fromLeaderTabId !== this.currentLeaderTabId)
      return;
    if (message.term !== this.currentLeaderTerm)
      return;
    for (const payload of message.payload) {
      this.workerBridge.applyIncomingServerPayload(payload);
    }
  }
  handleFollowerClose(message) {
    if (this.tabRole !== "leader")
      return;
    if (!this.workerBridge)
      return;
    if (!this.tabId || message.toLeaderTabId !== this.tabId)
      return;
    if (message.term !== this.currentLeaderTerm)
      return;
    if (!this.leaderPeerIds.has(message.fromTabId))
      return;
    this.leaderPeerIds.delete(message.fromTabId);
    this.workerBridge.closePeer(message.fromTabId);
    this.logLeaderDebug("peer-close", {
      peerId: message.fromTabId
    });
  }
  handleWorkerPeerSync(batch) {
    if (this.isShuttingDown)
      return;
    if (this.tabRole !== "leader")
      return;
    if (!this.tabId)
      return;
    if (batch.term !== this.currentLeaderTerm)
      return;
    this.postSyncChannelMessage({
      type: "leader-sync",
      fromLeaderTabId: this.tabId,
      toTabId: batch.peerId,
      term: batch.term,
      payload: batch.payload
    });
  }
  sendFollowerClose(leaderTabId, term) {
    if (!leaderTabId || !this.tabId)
      return;
    if (leaderTabId === this.tabId)
      return;
    this.logLeaderDebug("follower-close", {
      toLeaderTabId: leaderTabId,
      closeTerm: term
    });
    this.postSyncChannelMessage({
      type: "follower-close",
      fromTabId: this.tabId,
      toLeaderTabId: leaderTabId,
      term
    });
  }
  applyBridgeRoutingForCurrentLeader(bridge, replayConnection) {
    if (this.tabRole === "leader") {
      bridge.setServerPayloadForwarder(null);
      this.activeRemoteLeaderTabId = null;
      this.logLeaderDebug("upstream-mode", {
        mode: "leader-direct"
      });
    } else {
      bridge.setServerPayloadForwarder((payload) => {
        if (!this.tabId || !this.currentLeaderTabId)
          return;
        if (this.currentLeaderTabId === this.tabId)
          return;
        this.postSyncChannelMessage({
          type: "follower-sync",
          fromTabId: this.tabId,
          toLeaderTabId: this.currentLeaderTabId,
          term: this.currentLeaderTerm,
          payload: [payload]
        });
      });
      this.activeRemoteLeaderTabId = this.currentLeaderTabId;
      this.logLeaderDebug("upstream-mode", {
        mode: "follower-via-leader",
        upstreamLeaderTabId: this.currentLeaderTabId
      });
    }
    if (replayConnection) {
      bridge.replayServerConnection();
      this.logLeaderDebug("upstream-replay");
    }
  }
  onLeaderElectionChange(snapshot) {
    if (this.isShuttingDown || !this.primaryDbName)
      return;
    const previousRole = this.tabRole;
    const previousLeaderTabId = this.currentLeaderTabId;
    const previousTerm = this.currentLeaderTerm;
    this.adoptLeaderSnapshot(snapshot);
    this.logLeaderDebug("leader-change", {
      previousRole,
      previousLeaderTabId,
      previousTerm
    });
    if (previousRole === "follower" && previousLeaderTabId !== this.currentLeaderTabId) {
      this.sendFollowerClose(previousLeaderTabId, previousTerm);
    }
    const nextDbName = _Db.resolveWorkerDbNameForSnapshot(this.primaryDbName, snapshot);
    const dbNameChanged = nextDbName !== this.workerDbName;
    this.workerDbName = nextDbName;
    if (!this.workerBridge)
      return;
    this.enqueueWorkerReconfigure(async () => {
      if (this.isShuttingDown)
        return;
      if (dbNameChanged) {
        this.logLeaderDebug("worker-restart", {
          reason: "db-name-change"
        });
        await this.restartWorkerWithCurrentDbName();
        return;
      }
      if (this.workerBridge) {
        this.applyBridgeRoutingForCurrentLeader(this.workerBridge, true);
      }
    });
  }
  enqueueWorkerReconfigure(task) {
    this.workerReconfigure = this.workerReconfigure.then(task).catch((error) => {
      console.error("[db] Worker reconfigure failed:", error);
    });
  }
  async restartWorkerWithCurrentDbName() {
    const currentWorker = this.worker;
    if (!currentWorker)
      return;
    if (this.bridgeReady) {
      await this.bridgeReady;
    }
    if (this.workerBridge) {
      try {
        await this.workerBridge.shutdown(currentWorker);
      } catch {
      }
      this.workerBridge = null;
    }
    this.bridgeReady = null;
    currentWorker.terminate();
    this.worker = await _Db.spawnWorker(this.config.runtimeSources);
    const first = this.clients.entries().next();
    if (!first.done) {
      const [schemaJson, client] = first.value;
      this.attachWorkerBridge(schemaJson, client);
      if (this.bridgeReady) {
        await this.bridgeReady;
      }
    }
  }
  currentWorkerNamespace() {
    const driver = resolveStorageDriver(this.config.driver);
    if (driver.type !== "persistent") {
      throw new Error("Worker namespace is only available for driver.type='persistent'");
    }
    return this.workerDbName ?? driver.dbName ?? this.config.appId;
  }
  async shutdownWorkerAndClientsForStorageReset() {
    const currentWorker = this.worker;
    if (this.workerBridge && currentWorker) {
      try {
        await this.workerBridge.shutdown(currentWorker);
      } catch {
      }
    }
    this.workerBridge = null;
    this.bridgeReady = null;
    for (const client of this.clients.values()) {
      await client.shutdown();
    }
    this.clients.clear();
    this.leaderPeerIds.clear();
    this.activeRemoteLeaderTabId = null;
    if (currentWorker) {
      currentWorker.terminate();
    }
    this.worker = null;
  }
  async removeOpfsNamespaceFile(namespace) {
    const rootDirectory = await navigator.storage.getDirectory();
    const fileName = `${namespace}.opfsbtree`;
    try {
      await rootDirectory.removeEntry(fileName, { recursive: false });
    } catch (error) {
      const name = error?.name;
      if (name === "NotFoundError") {
        return;
      }
      if (name === "NoModificationAllowedError" || name === "InvalidStateError") {
        throw new Error(`Failed to delete browser storage for "${namespace}" because OPFS is locked by another tab. Close other tabs and retry.`);
      }
      throw new Error(`Failed to delete browser storage for "${namespace}": ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  static resolveWorkerDbNameForSnapshot(primaryDbName, snapshot) {
    if (snapshot.role === "leader")
      return primaryDbName;
    return `${primaryDbName}__fallback__${snapshot.tabId}`;
  }
  static async spawnWorker(runtimeSources) {
    let worker;
    if (runtimeSources?.workerUrl || runtimeSources?.baseUrl) {
      const locationHref = typeof location !== "undefined" ? location.href : void 0;
      const syncInitInput = resolveRuntimeConfigSyncInitInput(runtimeSources);
      const wasmUrl = syncInitInput ? null : resolveWorkerBootstrapWasmUrl(import.meta.url, locationHref, runtimeSources);
      const workerUrl = appendWorkerRuntimeWasmUrl(resolveRuntimeConfigWorkerUrl(import.meta.url, locationHref, runtimeSources), wasmUrl);
      worker = new Worker(workerUrl, { type: "module" });
    } else {
      worker = new Worker(new URL("../worker/jazz-worker.js", import.meta.url), {
        type: "module"
      });
    }
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Worker bootstrap timeout")), 15e3);
      const handler = (event) => {
        if (event.data.type === "ready") {
          clearTimeout(timeout);
          worker.removeEventListener("message", handler);
          resolve();
        } else if (event.data.type === "error") {
          clearTimeout(timeout);
          worker.removeEventListener("message", handler);
          reject(new Error(event.data.message));
        }
      };
      worker.addEventListener("message", handler);
      worker.addEventListener("error", (e) => {
        clearTimeout(timeout);
        reject(new Error(`Worker load error: ${e.message}`));
      });
    });
    return worker;
  }
  updateAuthToken(jwtToken) {
    this.applyAuthUpdate(jwtToken);
  }
  updateCookieSession(cookieSession) {
    this.applyCookieSessionUpdate(cookieSession);
  }
  getAuthState() {
    return this.authStateStore.getState();
  }
  /**
   * Mint a short-lived local-first JWT proving possession of the current identity.
   * Returns `null` if the current session is not local-first.
   */
  async getLocalFirstIdentityProof(options) {
    if (!this._localFirstSecret) {
      return null;
    }
    const wasmModule2 = this.wasmModule;
    if (!wasmModule2) {
      return null;
    }
    const ttl = options?.ttlSeconds ?? 60;
    const audience = options?.audience ?? this.config.appId;
    const nowSeconds = BigInt(Math.floor(Date.now() / 1e3));
    return wasmModule2.WasmRuntime.mintJazzSelfSignedToken(this._localFirstSecret, "urn:jazz:local-first", audience, BigInt(ttl), nowSeconds);
  }
  onAuthChanged(listener) {
    return this.authStateStore.onChange((state) => {
      listener(state);
    });
  }
  /**
   * Attach a fallback listener to be notified when a write operation
   * (insert, update, delete) is rejected.
   * This callback is only called if the write error is not surfaced by
   * {@link WriteHandle.wait}.
   * This callback is called even after app restarts (which does not
   * happen with {@link WriteHandle.wait}).
   */
  onMutationError(listener) {
    this.mutationErrorListeners.add(listener);
    for (const client of this.clients.values()) {
      this.attachMutationErrorHandler(client);
    }
    return () => {
      this.mutationErrorListeners.delete(listener);
      if (this.mutationErrorListeners.size > 0) {
        return;
      }
      for (const unsubscribe of this.clientMutationErrorUnsubscribers.values()) {
        unsubscribe();
      }
      this.clientMutationErrorUnsubscribers.clear();
    };
  }
  getConfig() {
    return structuredClone(this.config);
  }
  setDevMode(enabled) {
    this.config.devMode = enabled;
  }
  getActiveQuerySubscriptions() {
    return Array.from(this.activeQuerySubscriptionTraces.values()).filter((trace) => trace.visibility === "public").map(({ visibility: _visibility, ...trace }) => cloneActiveQuerySubscriptionTrace(trace));
  }
  onActiveQuerySubscriptionsChange(listener) {
    this.activeQuerySubscriptionTraceListeners.add(listener);
    listener(this.getActiveQuerySubscriptions());
    return () => {
      this.activeQuerySubscriptionTraceListeners.delete(listener);
    };
  }
  /**
   * Insert a new row into a table without waiting for durability.
   *
   * @param table Table proxy from generated app module
   * @param data Init object with column values
   * @returns Insert handle containing the inserted row
   */
  insert(table2, data, options) {
    const client = this.getClient(table2._schema);
    const values = toInsertRecord(data, table2._schema, table2._table);
    const inserted = client.create(table2._table, values, options);
    return inserted.mapValue((row) => transformRow(row, table2._schema, table2._table));
  }
  /**
   * Insert a new row into a table and wait for durability at the requested tier.
   *
   * @param table Table proxy from generated app module
   * @param data Init object with column values
   * @param options Durability tier
   * @returns Promise resolving to the inserted row
   */
  async insertDurable(table2, data, options) {
    const client = this.getClient(table2._schema);
    const runtimeSchema = createRuntimeSchemaResolver(() => normalizeRuntimeSchema(client.getSchema()));
    const inputSchema = resolveSchemaWithTable(table2._schema, runtimeSchema.get, table2._table);
    await this.ensureBridgeReady();
    const values = toInsertRecord(data, inputSchema, table2._table);
    const row = await client.createDurable(table2._table, values, options);
    return transformRow(row, table2._schema, table2._table);
  }
  insertPersisted(table2, data, options) {
    const client = this.getClient(table2._schema);
    const values = toInsertRecord(data, table2._schema, table2._table);
    const pendingWrite = client.createPersisted(table2._table, values, options);
    return this.wrapPersistedWrite(client, pendingWrite, (row) => transformRow(row, table2._schema, table2._table));
  }
  /**
   * Create or update a row with a caller-supplied id without waiting for durability.
   */
  upsert(table2, data, options) {
    const client = this.getClient(table2._schema);
    const values = toUpdateRecord(data, table2._schema, table2._table);
    return client.upsert(table2._table, values, options);
  }
  /**
   * Create or update a row with a caller-supplied id and wait for durability.
   */
  async upsertDurable(table2, data, options) {
    const client = this.getClient(table2._schema);
    const runtimeSchema = createRuntimeSchemaResolver(() => normalizeRuntimeSchema(client.getSchema()));
    const inputSchema = resolveSchemaWithTable(table2._schema, runtimeSchema.get, table2._table);
    await this.ensureBridgeReady();
    const values = toUpdateRecord(data, inputSchema, table2._table);
    await client.upsertDurable(table2._table, values, options);
  }
  /**
   * Update an existing row without waiting for durability.
   */
  update(table2, id, data, options) {
    const client = this.getClient(table2._schema);
    const updates = toUpdateRecord(data, table2._schema, table2._table);
    return client.update(id, updates, options);
  }
  /**
   * Update an existing row and wait for durability at the requested tier.
   */
  async updateDurable(table2, id, data, options) {
    const client = this.getClient(table2._schema);
    const runtimeSchema = createRuntimeSchemaResolver(() => normalizeRuntimeSchema(client.getSchema()));
    const inputSchema = resolveSchemaWithTable(table2._schema, runtimeSchema.get, table2._table);
    await this.ensureBridgeReady();
    const updates = toUpdateRecord(data, inputSchema, table2._table);
    await client.updateDurable(id, updates, options);
  }
  updatePersisted(table2, id, data, options) {
    const client = this.getClient(table2._schema);
    const updates = toUpdateRecord(data, table2._schema, table2._table);
    const pendingWrite = client.updatePersisted(id, updates, options);
    return this.wrapPersistedWrite(client, pendingWrite, () => void 0);
  }
  /**
   * Delete a row without waiting for durability.
   */
  delete(table2, id) {
    const client = this.getClient(table2._schema);
    return client.delete(id);
  }
  beginTransaction(table2) {
    const client = this.getClient(table2._schema);
    return new DbTransaction(client, client.beginTransactionInternal(), (candidateTable, operation) => assertTableBelongsToClient(candidateTable, client, (schema2) => this.getClient(schema2), operation));
  }
  beginDirectBatch(table2) {
    const client = this.getClient(table2._schema);
    return new DbDirectBatch(client, client.beginDirectBatchInternal(), (candidateTable, operation) => assertTableBelongsToClient(candidateTable, client, (schema2) => this.getClient(schema2), operation));
  }
  /**
   * Delete browser OPFS storage for this Db's active namespace and reopen a clean worker.
   *
   * This clears the primary namespace plus any active follower fallback namespaces for the same
   * browser app/database. It does not touch localStorage-based local-first auth state.
   *
   * Behavior:
   * - Browser worker-backed Db only (throws in non-browser/non-worker runtimes)
   * - Can be initiated from either leader or follower tabs
   * - Coordinates worker shutdown over the tab sync channel before deleting OPFS files
   * - Serializes with worker reconfigure operations
   * - Tears down worker + clients, deletes OPFS files, respawns workers
   * - If deletion fails, all participating tabs still respawn their workers before surfacing the error
   */
  async deleteClientStorage() {
    if (resolveStorageDriver(this.config.driver).type !== "persistent") {
      throw new Error("deleteClientStorage() is only available when driver.type='persistent'.");
    }
    if (!isBrowser()) {
      console.error("deleteClientStorage() is only available on browser worker-backed Db instances.");
      return;
    }
    const operation = this.workerReconfigure.then(async () => {
      await this.requestCoordinatedStorageReset();
    });
    this.workerReconfigure = operation.then(() => void 0, () => void 0);
    await operation;
  }
  /**
   * Release the current Db instance for logout flows.
   *
   * When `wipeData` is enabled in browser persistent mode, Jazz first coordinates a cross-tab OPFS
   * wipe and then shuts this Db down. Callers should still sign out of their external auth provider
   * separately and recreate `JazzProvider` / `Db` after logout.
   */
  async logout(options = {}) {
    if (options.wipeData) {
      await this.deleteClientStorage();
    }
    await this.shutdown();
  }
  /**
   * Execute a query and return all matching rows as typed objects.
   *
   * @param query QueryBuilder instance (e.g., app.todos.where({done: false}))
   * @returns Array of typed objects matching the query
   */
  async all(query, options) {
    const client = this.getClient(query._schema);
    const runtimeSchema = createRuntimeSchemaResolver(() => normalizeRuntimeSchema(client.getSchema()));
    const builderJson = query._build();
    const builtQuery = normalizeBuiltQuery(JSON.parse(builderJson), query._table);
    const planningSchema = resolveSchemaWithTable(query._schema, runtimeSchema.get, builtQuery.table);
    const outputTable = resolveBuiltQueryOutputTable(planningSchema, builtQuery);
    const outputSchema = resolveSchemaWithTable(query._schema, runtimeSchema.get, outputTable);
    await this.ensureQueryReady(options);
    const wasmQuery = translateQuery(builderJson, planningSchema);
    const rows = await client.query(wasmQuery, options);
    const outputIncludes = outputTable !== builtQuery.table ? {} : builtQuery.includes;
    return transformRows(rows, outputSchema, outputTable, outputIncludes, builtQuery.select);
  }
  /**
   * Execute a query and return the first matching row, or null.
   *
   * @param query QueryBuilder instance
   * @param options Optional read durability options
   * @returns First matching typed object, or null if none found
   */
  async one(query, options) {
    const results = await this.all(query, options);
    return results[0] ?? null;
  }
  /**
   * Create a conventional `files` row by chunking a browser Blob into `file_parts`.
   *
   * Expects `app.files` and `app.file_parts` to follow the built-in file-storage conventions.
   */
  async createFileFromBlob(app, blob, options) {
    return createConventionalFileStorage(this, app).fromBlob(blob, options);
  }
  /**
   * Create a conventional `files` row by chunking a browser ReadableStream into `file_parts`.
   *
   * Expects `app.files` and `app.file_parts` to follow the built-in file-storage conventions.
   */
  async createFileFromStream(app, stream, options) {
    return createConventionalFileStorage(this, app).fromStream(stream, options);
  }
  /**
   * Load a conventional file as a browser ReadableStream by querying the file row first
   * and then reading each referenced `file_parts` row sequentially.
   */
  async loadFileAsStream(app, fileOrId, options) {
    return createConventionalFileStorage(this, app).toStream(fileOrId, options);
  }
  /**
   * Load a conventional file as a Blob using the same sequential part-query path as `loadFileAsStream`.
   */
  async loadFileAsBlob(app, fileOrId, options) {
    return createConventionalFileStorage(this, app).toBlob(fileOrId, options);
  }
  /**
   * Subscribe to a query and receive updates when results change.
   *
   * The callback receives a SubscriptionDelta with:
   * - `all`: Complete current result set
   * - `delta`: Ordered list of row-level changes
   *
   * @param query QueryBuilder instance
   * @param callback Called with delta whenever results change
   * @returns Unsubscribe function
   *
   * @example
   * ```typescript
   * const unsubscribe = db.subscribeAll(app.todos, (delta) => {
   *   setTodos(delta.all);
   *   for (const change of delta.delta) {
   *     if (change.kind === 0) {
   *       console.log("New row:", change.row);
   *     }
   *   }
   * });
   *
   * // Later: stop receiving updates
   * unsubscribe();
   * ```
   */
  subscribeAll(query, callback, options, session) {
    const manager = new SubscriptionManager();
    const client = this.getClient(query._schema);
    const runtimeSchema = createRuntimeSchemaResolver(() => normalizeRuntimeSchema(client.getSchema()));
    const builderJson = query._build();
    const builtQuery = normalizeBuiltQuery(JSON.parse(builderJson), query._table);
    const planningSchema = resolveSchemaWithTable(query._schema, runtimeSchema.get, builtQuery.table);
    const outputTable = resolveBuiltQueryOutputTable(planningSchema, builtQuery);
    const outputSchema = resolveSchemaWithTable(query._schema, runtimeSchema.get, outputTable);
    const outputIncludes = outputTable !== builtQuery.table ? {} : builtQuery.includes;
    const wasmQuery = translateQuery(builderJson, planningSchema);
    const transform = (row) => {
      return transformRow(row, outputSchema, outputTable, outputIncludes, builtQuery.select);
    };
    const handleDelta = (delta) => {
      const typedDelta = manager.handleDelta(delta, transform);
      callback(typedDelta);
    };
    const subId = session !== void 0 ? client.subscribeInternal(wasmQuery, handleDelta, session, options, runtimeSchema.peek()) : client.subscribe(wasmQuery, handleDelta, options);
    const traceId = this.registerActiveQuerySubscriptionTrace(wasmQuery, builtQuery.table, options);
    return () => {
      this.unregisterActiveQuerySubscriptionTrace(traceId);
      client.unsubscribe(subId);
      manager.clear();
    };
  }
  /**
   * Shutdown the Db and release all resources.
   * Closes all memoized JazzClient connections and the worker.
   */
  async shutdown() {
    this.isShuttingDown = true;
    if (this.localFirstRefreshTimer) {
      clearTimeout(this.localFirstRefreshTimer);
      this.localFirstRefreshTimer = null;
    }
    this.clearActiveQuerySubscriptionTraces();
    this.logLeaderDebug("shutdown");
    this.sendFollowerClose(this.activeRemoteLeaderTabId, this.currentLeaderTerm);
    this.activeRemoteLeaderTabId = null;
    this.leaderPeerIds.clear();
    this.closeSyncChannel();
    this.detachLifecycleHooks();
    if (this.leaderElectionUnsubscribe) {
      this.leaderElectionUnsubscribe();
      this.leaderElectionUnsubscribe = null;
    }
    if (this.leaderElection) {
      this.leaderElection.stop();
      this.leaderElection = null;
    }
    await this.workerReconfigure;
    await this.ensureBridgeReady();
    if (this.workerBridge && this.worker) {
      await this.workerBridge.shutdown(this.worker);
      this.workerBridge = null;
    }
    for (const unsubscribe of this.clientMutationErrorUnsubscribers.values()) {
      unsubscribe();
    }
    this.clientMutationErrorUnsubscribers.clear();
    this.mutationErrorListeners.clear();
    for (const client of this.clients.values()) {
      await client.shutdown();
    }
    this.clients.clear();
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }
  notifyActiveQuerySubscriptionTraceListeners() {
    if (this.activeQuerySubscriptionTraceListeners.size === 0) {
      return;
    }
    const snapshot = this.getActiveQuerySubscriptions();
    for (const listener of this.activeQuerySubscriptionTraceListeners) {
      listener(snapshot);
    }
  }
  registerActiveQuerySubscriptionTrace(queryJson, fallbackTable, options) {
    if (!this.config.devMode) {
      return null;
    }
    const resolvedOptions = resolveEffectiveQueryExecutionOptions(this.config, options);
    const payload = this.parseRuntimeQueryTracePayload(queryJson, fallbackTable);
    const traceId = `sub-${this.nextActiveQuerySubscriptionTraceId++}`;
    this.activeQuerySubscriptionTraces.set(traceId, {
      id: traceId,
      query: queryJson,
      table: payload.table,
      branches: payload.branches,
      tier: resolvedOptions.tier,
      propagation: resolvedOptions.propagation,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      stack: trimSubscriptionTraceStack(new Error().stack),
      visibility: resolvedOptions.visibility ?? "public"
    });
    this.notifyActiveQuerySubscriptionTraceListeners();
    return traceId;
  }
  unregisterActiveQuerySubscriptionTrace(traceId) {
    if (!traceId) {
      return;
    }
    if (!this.activeQuerySubscriptionTraces.delete(traceId)) {
      return;
    }
    this.notifyActiveQuerySubscriptionTraceListeners();
  }
  clearActiveQuerySubscriptionTraces() {
    if (this.activeQuerySubscriptionTraces.size === 0) {
      return;
    }
    this.activeQuerySubscriptionTraces.clear();
    this.notifyActiveQuerySubscriptionTraceListeners();
  }
  wrapPersistedWrite(client, pendingWrite, transformValue) {
    return new DbPersistedWrite(pendingWrite, transformValue, () => client.localBatchRecord(pendingWrite.batchId()), () => client.acknowledgeRejectedBatch(pendingWrite.batchId()));
  }
  parseRuntimeQueryTracePayload(queryJson, fallbackTable) {
    try {
      const parsed = JSON.parse(queryJson);
      const table2 = typeof parsed.table === "string" ? parsed.table : fallbackTable;
      const branches = Array.isArray(parsed.branches) ? parsed.branches.filter((branch) => typeof branch === "string") : [];
      return {
        table: table2,
        branches: branches.length > 0 ? branches : [this.config.userBranch ?? "main"]
      };
    } catch {
      return {
        table: fallbackTable,
        branches: [this.config.userBranch ?? "main"]
      };
    }
  }
};
function isBrowser() {
  return typeof Worker !== "undefined" && typeof window !== "undefined";
}
function generateEphemeralSeedBase64Url() {
  const bytes = new Uint8Array(32);
  globalThis.crypto.getRandomValues(bytes);
  let binary = "";
  for (const b of bytes)
    binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function createDb(config) {
  if (config.secret && (config.jwtToken || config.cookieSession)) {
    throw new Error("DbConfig error: secret, jwtToken, and cookieSession are mutually exclusive");
  }
  if (config.jwtToken && config.cookieSession) {
    throw new Error("DbConfig error: jwtToken and cookieSession are mutually exclusive");
  }
  let resolvedConfig = { ...config };
  let localFirstSecret = null;
  if (config.secret) {
    const secret = config.secret;
    localFirstSecret = secret;
    const wasmModule2 = await loadWasmModule(config.runtimeSources);
    const nowSeconds = BigInt(Math.floor(Date.now() / 1e3));
    const jwtToken = wasmModule2.WasmRuntime.mintJazzSelfSignedToken(secret, "urn:jazz:local-first", config.appId, BigInt(3600), nowSeconds);
    resolvedConfig = { ...resolvedConfig, jwtToken };
  } else if (!config.jwtToken && !config.cookieSession) {
    const wasmModule2 = await loadWasmModule(config.runtimeSources);
    const ephemeralSeed = generateEphemeralSeedBase64Url();
    const nowSeconds = BigInt(Math.floor(Date.now() / 1e3));
    const jwtToken = wasmModule2.WasmRuntime.mintJazzSelfSignedToken(ephemeralSeed, ANONYMOUS_JWT_ISSUER, config.appId, BigInt(3600), nowSeconds);
    resolvedConfig = { ...resolvedConfig, jwtToken };
  }
  const driver = resolveStorageDriver(resolvedConfig.driver);
  if (driver.type === "memory" && !resolvedConfig.serverUrl) {
    throw new Error("driver.type='memory' requires serverUrl.");
  }
  let db;
  if (isBrowser() && driver.type === "persistent") {
    db = await Db.createWithWorker(resolvedConfig);
  } else {
    db = await Db.create(resolvedConfig);
  }
  if (localFirstSecret) {
    db.initLocalFirstAuth(localFirstSecret, 3600);
  }
  return db;
}

// node_modules/jazz-tools/dist/runtime/auth-secret-store.js
var DEFAULT_KEY = "jazz-auth-secret";
function generateAuthSecret() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return uint8ArrayToBase64url(bytes);
}
function uint8ArrayToBase64url(bytes) {
  let binary = "";
  for (const b of bytes) {
    binary += String.fromCharCode(b);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function normalizeScopeSegment(value) {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return null;
  }
  return encodeURIComponent(trimmed);
}
function resolveBrowserAuthSecretKey(options = {}) {
  if (options.key) {
    return options.key;
  }
  const scopeSegments = [
    normalizeScopeSegment(options.appId),
    normalizeScopeSegment(options.userId),
    normalizeScopeSegment(options.sessionId)
  ].filter((segment) => segment !== null);
  if (scopeSegments.length === 0) {
    return DEFAULT_KEY;
  }
  return `${DEFAULT_KEY}:${scopeSegments.join(":")}`;
}
var BrowserAuthSecretStore = class _BrowserAuthSecretStore {
  static globalInstances = /* @__PURE__ */ new Map();
  static storageScopedInstances = /* @__PURE__ */ new WeakMap();
  key;
  storage;
  cachedPromise = null;
  constructor(options = {}) {
    this.key = resolveBrowserAuthSecretKey(options);
    this.storage = options.storage ?? globalThis.localStorage;
  }
  static getDefault(options = {}) {
    const storage = options.storage;
    const key = resolveBrowserAuthSecretKey(options);
    if (storage) {
      let instances = _BrowserAuthSecretStore.storageScopedInstances.get(storage);
      if (!instances) {
        instances = /* @__PURE__ */ new Map();
        _BrowserAuthSecretStore.storageScopedInstances.set(storage, instances);
      }
      let instance2 = instances.get(key);
      if (!instance2) {
        instance2 = new _BrowserAuthSecretStore(options);
        instances.set(key, instance2);
      }
      return instance2;
    }
    let instance = _BrowserAuthSecretStore.globalInstances.get(key);
    if (!instance) {
      instance = new _BrowserAuthSecretStore(options);
      _BrowserAuthSecretStore.globalInstances.set(key, instance);
    }
    return instance;
  }
  async loadSecret() {
    return this.storage.getItem(this.key);
  }
  async saveSecret(secret) {
    this.storage.setItem(this.key, secret);
    this.cachedPromise = Promise.resolve(secret);
  }
  async clearSecret() {
    this.storage.removeItem(this.key);
    this.cachedPromise = null;
  }
  getOrCreateSecret() {
    if (!this.cachedPromise) {
      const existing = this.storage.getItem(this.key);
      if (existing) {
        this.cachedPromise = Promise.resolve(existing);
      } else {
        const secret = generateAuthSecret();
        this.storage.setItem(this.key, secret);
        this.cachedPromise = Promise.resolve(secret);
      }
    }
    return this.cachedPromise;
  }
  static loadSecret(options = {}) {
    return _BrowserAuthSecretStore.getDefault(options).loadSecret();
  }
  static saveSecret(secret, options = {}) {
    return _BrowserAuthSecretStore.getDefault(options).saveSecret(secret);
  }
  static clearSecret(options = {}) {
    return _BrowserAuthSecretStore.getDefault(options).clearSecret();
  }
  static getOrCreateSecret(options = {}) {
    return _BrowserAuthSecretStore.getDefault(options).getOrCreateSecret();
  }
};
var browserAuthSecretStore = BrowserAuthSecretStore.getDefault();

// node_modules/jazz-tools/dist/index.js
var schema = Object.assign({}, col, {
  table: defineTable,
  defineSchema,
  defineApp,
  defineMigration,
  renameTableFrom,
  definePermissions,
  permissionIntrospectionColumns
});

// src/lib/sharedConfig.ts
var DEFAULT_SHARE_BASE_URL = "https://gdorsi.github.io/shareable-diagrams/";
var DEFAULT_GRANT_SERVICE_URL = "http://127.0.0.1:43110";
var DEFAULT_PASSKEY_RP_ID = "gdorsi.github.io";
var GRANT_CODE_TTL_MS = 10 * 60 * 1e3;
function resolveSharedConfig(env) {
  return {
    appId: env.VITE_JAZZ_APP_ID ?? "shareable-diagrams",
    serverUrl: env.VITE_JAZZ_SERVER_URL ?? "https://cloud.jazz.tools",
    passkeyRpId: env.VITE_JAZZ_PASSKEY_RP_ID ?? DEFAULT_PASSKEY_RP_ID,
    shareBaseUrl: env.SHARE_DIAGRAM_BASE_URL ?? env.VITE_SHARE_DIAGRAM_BASE_URL ?? DEFAULT_SHARE_BASE_URL,
    grantServiceUrl: env.SHARE_DIAGRAM_GRANT_SERVICE_URL ?? env.VITE_SHARE_DIAGRAM_GRANT_SERVICE_URL ?? DEFAULT_GRANT_SERVICE_URL,
    grantCodeTtlMs: GRANT_CODE_TTL_MS
  };
}
function isApprovedGrantOrigin(origin) {
  if (origin === "https://gdorsi.github.io") return true;
  try {
    const url = new URL(origin);
    return url.protocol === "http:" && (url.hostname === "localhost" || url.hostname === "127.0.0.1");
  } catch {
    return false;
  }
}

// skills/share-diagram/scripts/identity-store.src.mjs
function getScriptIdentityDir() {
  return join(homedir(), ".shareable-diagrams");
}
function getScriptIdentityPath() {
  return join(getScriptIdentityDir(), "script-identity.json");
}
function ensurePrivateDirectory(dirPath) {
  mkdirSync(dirPath, { recursive: true, mode: 448 });
  chmodSync(dirPath, 448);
}
function atomicWriteFile(filePath, contents) {
  const dirPath = dirname(filePath);
  ensurePrivateDirectory(dirPath);
  const tempPath = `${filePath}.${process.pid}.${Math.random().toString(16).slice(2)}.tmp`;
  try {
    writeFileSync(tempPath, contents, { mode: 384 });
    renameSync(tempPath, filePath);
  } finally {
    try {
      unlinkSync(tempPath);
    } catch {
    }
  }
}
function readScriptIdentityFile() {
  try {
    const raw = readFileSync(getScriptIdentityPath(), "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && typeof parsed.secret === "string" && parsed.secret) {
      return parsed.secret;
    }
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
  return null;
}
function writeScriptIdentityFile(secret) {
  atomicWriteFile(getScriptIdentityPath(), `${JSON.stringify({ secret }, null, 2)}
`);
}
async function loadOrCreateScriptSecret() {
  const existingSecret = readScriptIdentityFile();
  if (existingSecret) {
    return existingSecret;
  }
  const secret = generateAuthSecret();
  writeScriptIdentityFile(secret);
  return secret;
}
async function createScriptDb(env = process.env) {
  const config = resolveSharedConfig(env);
  const secret = await loadOrCreateScriptSecret();
  const db = await createDb({
    appId: config.appId,
    serverUrl: config.serverUrl,
    secret
  });
  const ownerId = db.getAuthState().session?.user_id;
  if (!ownerId) {
    throw new Error("script identity has no ownerId");
  }
  return {
    db,
    ownerId,
    config,
    secret
  };
}

// skills/share-diagram/scripts/grant-code-store.src.mjs
import {
  chmodSync as chmodSync2,
  mkdirSync as mkdirSync2,
  readFileSync as readFileSync2,
  renameSync as renameSync2,
  unlinkSync as unlinkSync2,
  writeFileSync as writeFileSync2
} from "node:fs";
import { dirname as dirname2, join as join2 } from "node:path";
import { homedir as homedir2 } from "node:os";
import { createHash, randomBytes, randomUUID } from "node:crypto";
function getGrantCodeStoreDir() {
  return join2(homedir2(), ".shareable-diagrams");
}
function getGrantCodeStorePath() {
  return join2(getGrantCodeStoreDir(), "grant-codes.json");
}
function ensurePrivateDirectory2(dirPath) {
  mkdirSync2(dirPath, { recursive: true, mode: 448 });
  chmodSync2(dirPath, 448);
}
function atomicWriteFile2(filePath, contents) {
  const dirPath = dirname2(filePath);
  ensurePrivateDirectory2(dirPath);
  const tempPath = `${filePath}.${process.pid}.${Math.random().toString(16).slice(2)}.tmp`;
  try {
    writeFileSync2(tempPath, contents, { mode: 384 });
    renameSync2(tempPath, filePath);
  } finally {
    try {
      unlinkSync2(tempPath);
    } catch {
    }
  }
}
function sha256Hex(value) {
  return createHash("sha256").update(value).digest("hex");
}
function normalizeRecord(record) {
  return {
    codeHash: typeof record.codeHash === "string" ? record.codeHash : "",
    ownerId: typeof record.ownerId === "string" ? record.ownerId : "",
    issuedAt: Number.isFinite(record.issuedAt) ? record.issuedAt : 0,
    expiresAt: Number.isFinite(record.expiresAt) ? record.expiresAt : 0,
    usedAt: Number.isFinite(record.usedAt) ? record.usedAt : null,
    reservedAt: Number.isFinite(record.reservedAt) ? record.reservedAt : null,
    reservationId: typeof record.reservationId === "string" ? record.reservationId : null
  };
}
function readGrantCodeStateFile() {
  try {
    const raw = readFileSync2(getGrantCodeStorePath(), "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && Array.isArray(parsed.records)) {
      return parsed.records.filter((record) => record && typeof record === "object").map(normalizeRecord);
    }
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
  return [];
}
function writeGrantCodeStateFile(records) {
  atomicWriteFile2(
    getGrantCodeStorePath(),
    `${JSON.stringify({ records: records.map(normalizeRecord) }, null, 2)}
`
  );
}
function ensureState(state) {
  if (!state || typeof state !== "object") {
    return {
      records: readGrantCodeStateFile(),
      persist() {
        writeGrantCodeStateFile(this.records);
      }
    };
  }
  if (!Array.isArray(state.records)) {
    state.records = [];
  }
  return state;
}
function persistState(state) {
  if (typeof state.persist === "function") {
    state.persist();
  }
}
function findRecordByCodeHash(state, codeHash) {
  return state.records.find((entry) => entry && entry.codeHash === codeHash) ?? null;
}
function validateAvailableRecord(record, now) {
  if (!record) {
    throw new Error("grant code not found");
  }
  if (record.usedAt != null) {
    throw new Error("grant code already used");
  }
  if (record.reservationId) {
    throw new Error("grant code already reserved");
  }
  if (record.expiresAt <= now) {
    throw new Error("grant code expired");
  }
}
function reserveGrantCode({ code, now = () => Date.now(), state }) {
  if (typeof code !== "string" || !code) {
    throw new Error("code is required");
  }
  const grantState = ensureState(state);
  const codeHash = sha256Hex(code);
  const record = findRecordByCodeHash(grantState, codeHash);
  const nowMs = now();
  validateAvailableRecord(record, nowMs);
  record.reservedAt = nowMs;
  record.reservationId = randomUUID();
  persistState(grantState);
  return {
    codeHash: record.codeHash,
    ownerId: record.ownerId,
    issuedAt: record.issuedAt,
    expiresAt: record.expiresAt,
    reservedAt: record.reservedAt,
    reservationId: record.reservationId
  };
}
function finalizeGrantCode({ reservation, state, now = () => Date.now() }) {
  if (!reservation || typeof reservation !== "object") {
    throw new Error("reservation is required");
  }
  const grantState = ensureState(state);
  const record = findRecordByCodeHash(grantState, reservation.codeHash);
  if (!record) {
    throw new Error("grant code not found");
  }
  if (record.usedAt != null) {
    throw new Error("grant code already used");
  }
  if (record.reservationId !== reservation.reservationId || record.reservationId == null) {
    throw new Error("grant code reservation missing");
  }
  record.usedAt = now();
  record.reservedAt = null;
  record.reservationId = null;
  persistState(grantState);
  return {
    ownerId: record.ownerId,
    issuedAt: record.issuedAt,
    expiresAt: record.expiresAt,
    usedAt: record.usedAt
  };
}
function releaseGrantCode({ reservation, state }) {
  if (!reservation || typeof reservation !== "object") {
    return false;
  }
  const grantState = ensureState(state);
  const record = findRecordByCodeHash(grantState, reservation.codeHash);
  if (!record || record.usedAt != null) {
    return false;
  }
  if (record.reservationId !== reservation.reservationId) {
    return false;
  }
  record.reservedAt = null;
  record.reservationId = null;
  persistState(grantState);
  return true;
}

// src/lib/schema.ts
var shareableDiagramsApp = schema.defineApp({
  documents: schema.table({
    ownerId: col.string(),
    content: col.string()
  }).index("documents_by_owner", ["ownerId"]),
  documentWriteGrants: schema.table({
    ownerId: col.string(),
    granteeId: col.string()
  }).index("grants_by_owner_grantee", ["ownerId", "granteeId"])
});
var shareableDiagramsPermissions = definePermissions(
  shareableDiagramsApp,
  ({ anyOf: anyOf2, policy, session }) => {
    policy.documents.allowRead.always();
    policy.documents.allowInsert.where({ ownerId: session.user_id });
    policy.documents.allowUpdate.where(
      (row) => anyOf2([
        { ownerId: session.user_id },
        policy.exists(
          policy.documentWriteGrants.where({
            ownerId: row.ownerId,
            granteeId: session.user_id
          })
        )
      ])
    );
    policy.documents.allowDelete.where(
      (row) => anyOf2([
        { ownerId: session.user_id },
        policy.exists(
          policy.documentWriteGrants.where({
            ownerId: row.ownerId,
            granteeId: session.user_id
          })
        )
      ])
    );
    policy.documentWriteGrants.allowRead.where({ ownerId: session.user_id });
    policy.documentWriteGrants.allowInsert.where({ ownerId: session.user_id });
    policy.documentWriteGrants.allowDelete.where({ ownerId: session.user_id });
  }
);

// skills/share-diagram/scripts/grant-server.src.mjs
function jsonResponse(status, payload, headers = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...headers
    }
  });
}
function corsHeaders(origin) {
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-credentials": "true",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-allow-private-network": "true",
    vary: "origin"
  };
}
function isGrantRoute(request) {
  const url = new URL(request.url);
  return url.pathname === "/grant-access";
}
function getRequestOrigin(request) {
  return request.headers.get("origin") ?? "";
}
async function readJsonBody(request) {
  const text = await request.text();
  if (!text.trim()) {
    return null;
  }
  return JSON.parse(text);
}
function ensureApprovedOrigin(request) {
  const origin = getRequestOrigin(request);
  if (!origin || !isApprovedGrantOrigin(origin)) {
    return {
      ok: false,
      origin,
      response: jsonResponse(403, { error: "grant origin not approved" })
    };
  }
  return { ok: true, origin };
}
function mapGrantCodeError(error) {
  const message = error instanceof Error ? error.message : "grant request failed";
  const status = message === "grant code already used" ? 409 : message === "grant code expired" ? 410 : message === "grant code already reserved" ? 409 : 400;
  return { message, status };
}
function createGrantServer({ db }) {
  if (!db || typeof db.upsertDurable !== "function") {
    throw new Error("db with upsertDurable is required");
  }
  async function handle(request) {
    if (!isGrantRoute(request)) {
      return jsonResponse(404, { error: "not found" });
    }
    const originCheck = ensureApprovedOrigin(request);
    if (!originCheck.ok) {
      return originCheck.response;
    }
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(originCheck.origin)
      });
    }
    let payload;
    try {
      payload = await readJsonBody(request);
    } catch {
      return jsonResponse(400, { error: "invalid grant request body" }, corsHeaders(originCheck.origin));
    }
    const browserUserId = payload && typeof payload.browserUserId === "string" ? payload.browserUserId : "";
    const code = payload && typeof payload.code === "string" ? payload.code : "";
    if (!browserUserId || !code) {
      return jsonResponse(400, { error: "browserUserId and code are required" }, corsHeaders(originCheck.origin));
    }
    let reservation;
    try {
      reservation = reserveGrantCode({
        code
      });
    } catch (error) {
      const { message, status } = mapGrantCodeError(error);
      return jsonResponse(status, { error: message }, corsHeaders(originCheck.origin));
    }
    const grantId = `grant:${reservation.ownerId}:${browserUserId}`;
    try {
      await db.upsertDurable(
        shareableDiagramsApp.documentWriteGrants,
        {
          ownerId: reservation.ownerId,
          granteeId: browserUserId
        },
        {
          id: grantId
        }
      );
      finalizeGrantCode({
        reservation
      });
    } catch (error) {
      releaseGrantCode({
        reservation
      });
      const { message } = mapGrantCodeError(error);
      return jsonResponse(500, { error: message }, corsHeaders(originCheck.origin));
    }
    return jsonResponse(
      200,
      {
        ok: true,
        id: grantId,
        ownerId: reservation.ownerId,
        browserUserId
      },
      corsHeaders(originCheck.origin)
    );
  }
  async function listen(port = 43110, host = "127.0.0.1") {
    const server = http.createServer((req, res) => {
      void (async () => {
        try {
          const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host ?? `${host}:${port}`}`);
          const chunks = [];
          for await (const chunk of req) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          }
          const body = chunks.length ? Buffer.concat(chunks) : void 0;
          const requestInit = {
            method: req.method ?? "GET",
            headers: req.headers
          };
          if (body) {
            requestInit.body = body;
            requestInit.duplex = "half";
          }
          const request = new Request(requestUrl, requestInit);
          const response = await handle(request);
          res.statusCode = response.status;
          response.headers.forEach((value, key) => {
            res.setHeader(key, value);
          });
          if (response.body) {
            const buffer = Buffer.from(await response.arrayBuffer());
            res.end(buffer);
          } else {
            res.end();
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : "grant service failed";
          res.statusCode = 500;
          res.setHeader("content-type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ error: message }));
        }
      })();
    });
    await new Promise((resolve) => {
      server.listen(port, host, resolve);
    });
    return server;
  }
  return {
    handle,
    listen
  };
}
async function main() {
  const { db } = await createScriptDb();
  const grantServer = createGrantServer({ db });
  await grantServer.listen(43110);
  process.stdout.write("grant server listening on http://127.0.0.1:43110\n");
}
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    process.stderr.write(`Error: ${error.stack ?? error.message ?? error}
`);
    process.exit(1);
  });
}
export {
  createGrantServer
};
