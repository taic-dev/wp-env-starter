<?php
  // ローカル環境ではlocal、本番環境ではproductionを返す
  define('IS_TYPE', wp_get_environment_type());