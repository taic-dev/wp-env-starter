<?php
  function js_path($name) {
    if(IS_TYPE === 'local') return VITE_URL.'/src/assets/ts/'.$name;
    // .tsを.jsに置換
    $name = str_replace('.ts', '.js', $name);
    return get_template_directory_uri().'/assets/js/'.$name.'?ver='.date('His');
  }

  function css_path($name) {
    if(IS_TYPE === 'local') return VITE_URL.'/src/assets/css/'.$name;
    // .scssを.cssに置換
    $name = str_replace('.scss', '.css', $name);
    return get_template_directory_uri().'/assets/css/'.$name.'?ver='.date('His');
  }

  function image_path($name) {
    if(IS_TYPE === 'local') return VITE_URL.'/src/assets/images/'.$name;
    return get_template_directory_uri().'/assets/images/'.$name.'?ver='.date('His');
  }

  function static_path($name) {
    if(IS_TYPE === 'local') return VITE_URL.'/src/assets/static'.$name;
    return get_template_directory_uri().'/assets/static/'.$name.'?ver='.date('His');
  }