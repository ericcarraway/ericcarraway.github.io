---
layout: minimal
title: Text Utilities
description: utilities for manipulating text
permalink: /text-util/
---
<link rel="stylesheet" href="../assets/text-util/textUtil.css">

<div class="container">

    <button
        type="button"
        id="list-unique-words"
        onclick="app.uniqueWords()">
        list unique words
    </button>

    <button
        type="button"
        id="list-unique-words"
        onclick="app.filterCommonProse()">
        filter common prose
    </button>

    <br>

    <!-- keep no space between opening and closing textarea tags -->
    <textarea
        name="textarea"
        rows="40"
        cols="80"></textarea>

    <br>

    <a href="../">ericcarraway.com</a>
</div>  <!-- /.container -->

<script src="../assets/text-util/word-lists/prose/deekayen.js"></script>
<script src="../assets/text-util/word-lists/prose/splasho.js"></script>
<script src="../assets/text-util/textUtil.js"></script>
