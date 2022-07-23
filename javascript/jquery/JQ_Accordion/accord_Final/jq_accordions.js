        /* Begin Hamburger Action */
        var onClickHam = document.getElementById("onClickHam");
        var hamBar = document.getElementById("nav-hamburger");
        var i = 0;
        hamBar.addEventListener("click", function () {
            if (i == 0) {
                onClickHam.classList.add("navContentSlideShow");
                onClickHam.classList.remove("navContentSlideHide");
                i = 1;
            } else {
                onClickHam.classList.add("navContentSlideHide");
                onClickHam.classList.remove("navContentSlideShow");
                i = 0;
            }
        })

        /* End Hamburger Action */

        /* --- Begin Accordion --- */
            // $(".btn").click(function () {
        //     $(".slide").removeClass("show");
        //     var slide = $(this).closest(".slide");
        //     slide.addClass("show");
        // })

        var slide = document.querySelectorAll('.slide');
        var btn = document.querySelectorAll('.btn');
        //var content = document.querySelectorAll('.para');

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function () {

                let item = this.closest(".slide");

                for (let j = 0; j < slide.length; j++) {
                    if (slide[j].classList.contains('show')) {
                        slide[j].classList.remove('show');
                        slide[j].classList.add('hide');  
                    } else if (slide[j].classList.contains('hide')) {
                        slide[j].classList.remove('hide');
                    }
                }

                if (!item.classList.contains('show') && !item.classList.contains('hide')) {
                    item.classList.add('show');
                }
            });
        }

        /* --- End Accordion --- */

        /* ---Begin Accordion Cross-icon Action---  */
        $(".accord-cross-icon").click(function () {
            if ($(".slide").contains("show")) {
                $(".slide").removeClass('show');
                $(".slide").addClass('hide');
            }
            else if($(".slide").contains("hide"))
            {
                $(".slide").removeClass("hide");
            }
        })
        /* ---End Accordion Cross-icon Action---  */
    