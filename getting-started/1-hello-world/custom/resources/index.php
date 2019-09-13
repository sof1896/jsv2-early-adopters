<!DOCTYPE html>
<html>
<head>
    <title>JSv2 Static Example</title>

    <!-- css -->
    <link href='/assets/css/quick/klevu-quick.css' rel='stylesheet'>
    <link href='/assets/css/landing/klevu-landing.css' rel='stylesheet'>
    <link href='/assets/css/landing/klevu-landing-responsive.css' rel='stylesheet'>

    <!-- quick templates -->
    <?php include(dirname(__FILE__) . '/templates/quick/quick-auto-suggestions.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/quick/quick-base.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/quick/quick-category-suggestions.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/quick/quick-no-results-found.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/quick/quick-page-suggestions.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/quick/quick-product-block.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/quick/quick-products.tpl') ?>

    <!-- landing templates -->
    <?php include(dirname(__FILE__) . '/templates/landing/landing-base.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/landing/landing-no-results-found.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/landing/landing-pagination.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/landing/landing-filters.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/landing/landing-results.tpl') ?>
    <?php include(dirname(__FILE__) . '/templates/landing/landing-product-block.tpl') ?>
</head>

<body>
    <!-- quick search input -->
    <form action="/index.php" method="get">
        <label for="search">Search</label>
        <input type="text" name="q" id="search" placeholder="eg. bag" />
    </form>

    <!-- search results placeholder -->
    <div class="klevuLanding"></div>

    <!-- js -->
    <script src="//jsv2.klevu.com/export/klevu.js"></script>
    <script src="/assets/js/klevu-settings.js"></script>
    <script src="/assets/js/quick/klevu-quick.js"></script>
    <script src="/assets/js/landing/klevu-landing.js"></script>
</body>
</html>
