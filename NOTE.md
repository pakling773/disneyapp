# generate page

ng g m layout --routing=true && ng g c layout --skip-tests=true -m=layout

ng g m auth --routing=true && ng g c login --skip-tests=true -m=auth

ng g c sidebar --skip-tests=true -m=layout

ng g m layout --routing=true && ng g c layout --skip-tests=true -m=layout

ng g m items --routing=true && ng g c items --skip-tests=true -m=items

ng g m shops --routing=true && ng g c shops --skip-tests=true -m=shops

ng g m brands --routing=true && ng g c brands --skip-tests=true -m=brands

ng g m add-item --routing=true && ng g c add-item --skip-tests=true -m=add-item

ng g m orders --routing=true && ng g c orders --skip-tests=true -m=orders

ng g m movies --routing=true && ng g c movies --skip-tests=true -m=movies

ng g m movie-detail --routing=true && ng g c movie-detail --skip-tests=true -m=movie-detail

ng g c @shared/components/main-slider

ng g c @shared/components/categories
ng g c @shared/components/common-movies-slider

ng g c @shared/components/footer

ng g c @shared/components/disney-originals

ng g c tv-shows --skip-tests=true

ng g c category-reserve

ng g c category-reserve --skip-tests=true

ng g c tv-show

ng g c register --skip-tests=true

ng g c account-subscription --skip-tests=true

ng g c edit-users-profile --skip-tests=true

ng g c search-resut --skip-tests=true
ng g c login --skip-tests=true
