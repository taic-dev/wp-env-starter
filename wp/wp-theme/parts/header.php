<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?= css_path('style.scss'); ?>" />
  <?php wp_head(); ?>
</head>
<style> html { margin: 0 !important; } </style>
<body <?php body_class(); ?>>
  <header class="header">
    <h1 class="header__logo">WP-TEMPLATE</h1>
    <nav>
      <ul class="header__list">
        <li class="header__item"><a href="#">ABOUT</a></li>
        <li class="header__item"><a href="#">COMPANY</a></li>
        <li class="header__item"><a href="#">NEWS</a></li>
        <li class="header__item"><a href="#">RECRUIT</a></li>
      </ul>
    </nav>
  </header>
  <main>