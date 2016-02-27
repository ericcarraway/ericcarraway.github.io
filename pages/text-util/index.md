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
        onclick="app.uniqueWords()">
        list unique words
    </button>

    <!-- deekayen, splasho, aspell -->
    <button
        type="button"
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

    <div class="bottom-buttons">
        <button
            type="button"
            onclick="app.filterTmProse()">
            TM
        </button>

        <button
            type="button"
            onclick="app.filterAlice()">
            Alice
        </button>
    </div>

    <a href="../">ericcarraway.com</a>
    |
    <a href="https://github.com/ericcarraway/ericcarraway.github.io">view on GitHub</a>
</div>  <!-- /.container -->

<script src="../assets/text-util/word-lists/prose/deekayen.js"></script>
<script src="../assets/text-util/word-lists/prose/splasho.js"></script>
<script src="../assets/text-util/word-lists/prose/aspell.js"></script>
<script src="../assets/text-util/word-lists/prose/motto.js"></script>
<script src="../assets/text-util/word-lists/prose/alice.js"></script>

<script src="../assets/text-util/textUtil.js"></script>
<script src="../assets/text-util/domManip.js"></script>
<script src="../assets/text-util/app.js"></script>
