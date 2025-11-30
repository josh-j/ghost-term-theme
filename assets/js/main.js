$(function () {
    'use strict';
    featured();
    pagination(false);
    tocToggle();
    inlineSearch();
});

function featured() {
    'use strict';
    $('.featured-feed').owlCarousel({
        dots: false,
        margin: 30,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
}

function tocToggle() {
    'use strict';
    var $tocToggle = $('.gh-toc-toggle');
    var $tocContainer = $('.gh-toc-container');

    $tocToggle.on('click', function() {
        $tocContainer.toggleClass('is-open');
    });

    // Close TOC when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.gh-toc-container, .gh-toc-toggle').length) {
            $tocContainer.removeClass('is-open');
        }
    });

    // Close TOC when clicking a link
    $tocContainer.on('click', '.toc-link', function() {
        $tocContainer.removeClass('is-open');
    });
}

function inlineSearch() {
    'use strict';
    var $searchToggle = $('.gh-search-toggle');
    var $searchBar = $('.gh-search-bar');
    var $searchInput = $('.gh-search-input');
    var $searchClose = $('.gh-search-close');
    var $searchResults = $('.gh-search-results');
    var searchTimeout;

    // Toggle search bar
    $searchToggle.on('click', function() {
        $searchBar.toggleClass('is-open');
        if ($searchBar.hasClass('is-open')) {
            $searchInput.focus();
        } else {
            $searchInput.val('');
            $searchResults.empty();
        }
    });

    // Close search bar
    $searchClose.on('click', function() {
        $searchBar.removeClass('is-open');
        $searchInput.val('');
        $searchResults.empty();
    });

    // Close on escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $searchBar.hasClass('is-open')) {
            $searchBar.removeClass('is-open');
            $searchInput.val('');
            $searchResults.empty();
        }
    });

    // Search functionality
    $searchInput.on('input', function() {
        var query = $(this).val().trim();

        clearTimeout(searchTimeout);

        if (query.length < 2) {
            $searchResults.empty();
            return;
        }

        searchTimeout = setTimeout(function() {
            performSearch(query);
        }, 300);
    });

    function performSearch(query) {
        if (!window.ghostContentAPIKey) {
            $searchResults.html('<div class="gh-search-error">Search not configured</div>');
            return;
        }

        var url = window.location.origin;
        var apiUrl = url + '/ghost/api/content/posts/?key=' + window.ghostContentAPIKey + '&limit=all&fields=title,url,published_at,excerpt';

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Filter results client-side
                var filtered = data.posts.filter(function(post) {
                    var searchLower = query.toLowerCase();
                    var titleMatch = post.title && post.title.toLowerCase().indexOf(searchLower) !== -1;
                    var excerptMatch = post.excerpt && post.excerpt.toLowerCase().indexOf(searchLower) !== -1;
                    return titleMatch || excerptMatch;
                });
                displayResults(filtered, query);
            },
            error: function(xhr, status, error) {
                console.error('Search error:', status, error);
                $searchResults.html('<div class="gh-search-error">Search unavailable</div>');
            }
        });
    }

    function displayResults(posts, query) {
        if (!posts || posts.length === 0) {
            $searchResults.html('<div class="gh-search-no-results">No results found for "' + escapeHtml(query) + '"</div>');
            return;
        }

        var html = '<div class="gh-search-results-list">';
        posts.forEach(function(post) {
            var date = new Date(post.published_at);
            var dateStr = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

            html += '<a href="' + post.url + '" class="gh-search-result">';
            html += '<div class="gh-search-result-title">' + escapeHtml(post.title) + '</div>';
            if (post.excerpt) {
                html += '<div class="gh-search-result-excerpt">' + escapeHtml(post.excerpt) + '</div>';
            }
            html += '<div class="gh-search-result-date">' + dateStr + '</div>';
            html += '</a>';
        });
        html += '</div>';

        $searchResults.html(html);
    }

    function escapeHtml(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
}
