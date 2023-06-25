import {
  isRef,
  Ref,
  ref,
  watchEffect,
} from 'vue';

export const useExtractData = (_data: Ref<{ data: any }>) => {
  const result: Ref<null | unknown> = ref(null);
  const assign = () => {
    result.value = _data.value?.data || null;
  };

  if (isRef(_data)) {
    watchEffect(assign);
  } else {
    assign();
  }

  return { value: result };
};
